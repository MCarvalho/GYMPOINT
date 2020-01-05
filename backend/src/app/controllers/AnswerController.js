import * as Yup from 'yup';
import HelpOrders from '../schemas/HelpOrders';
import Student from '../models/Student';

import AnswerMail from '../jobs/AnswerMail';
import Queue from '../../lib/Queue';

class AnswerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;
    const { answer } = req.body;

    const helporder = await HelpOrders.findByIdAndUpdate(
      id,
      { answer, answer_at: new Date() },
      { new: true }
    );

    if (!helporder) {
      return res.status(400).json({ error: 'Help-Orders not found' });
    }

    const student = await Student.findByPk(helporder.student_id);

    if (!student) {
      return res.status(200).json({ warn: 'Student deleted' });
    }

    await Queue.add(AnswerMail.key, {
      student,
      helporder,
    });

    return res.json(helporder);
  }

  async index(req, res) {
    const helporders = await HelpOrders.find({
      answer: null,
    }).sort({ createdAt: 'desc' });

    return res.json(helporders);
  }
}

export default new AnswerController();
