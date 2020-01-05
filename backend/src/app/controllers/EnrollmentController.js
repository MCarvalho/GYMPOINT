import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';

import EnrollmentMail from '../jobs/EnrollmentMail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exists' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not exists' });
    }

    const enrollmentExists = await Enrollment.findOne({
      where: { student_id },
    });

    if (enrollmentExists) {
      return res.status(400).json({ error: 'Enrollment already existir' });
    }

    const enrollment = await Enrollment.create({
      student_id,
      plan_id,
      price_month: plan.price,
      start_date,
      duration: plan.duration,
    });

    const endDate = addMonths(parseISO(start_date), 3);
    const totalPrice = plan.price * plan.duration;

    await Queue.add(EnrollmentMail.key, {
      student,
      plan,
      endDate,
      totalPrice,
    });

    return res.json(enrollment);
  }

  async index(req, res) {
    const enrollments = await Enrollment.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });
    return res.json(enrollments);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number(),
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id);

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment not exists' });
    }

    const { student_id, plan_id, start_date } = req.body;

    if (student_id && student_id !== enrollment.student_id) {
      const studentExists = await Student.findByPk(student_id);

      if (!studentExists) {
        return res.status(400).json({ error: 'Student not exists' });
      }
    }
    const planId = plan_id || enrollment.plan_id;

    const plan = await Plan.findByPk(planId);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not exists' });
    }

    const startDate = start_date || enrollment.start_date;

    const { duration, price: price_month } = plan;

    const enrollmentup = await enrollment.update({
      student_id,
      plan_id,
      start_date: startDate,
      duration,
      price_month,
    });

    return res.json(enrollmentup);
  }

  async delete(req, res) {
    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id);

    const response = enrollment
      ? enrollment.destroy()
      : { error: 'Enrollment not exists' };

    return res.json(response);
  }
}

export default new EnrollmentController();
