import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.date().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.date(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(401).json({ error: 'Student not exists' });
    }

    if (req.body.email && req.body.email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email: req.body.email },
      });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    const { name, email, age, weight, height } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async index(req, res) {
    const { name } = req.query;

    const students = await Student.findAll({
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return res.json(students);
  }

  async delete(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    const response = student
      ? student.destroy()
      : { error: 'Student not exists' };

    return res.json(response);
  }

  async signInStudent(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id, {
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
    });

    if (!student) return res.status(400).json({ error: 'Student not exists' });

    return res.status(200).json(student);
  }
}

export default new StudentController();
