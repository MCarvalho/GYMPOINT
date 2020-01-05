import * as Yup from 'yup';
import HelpOrders from '../schemas/HelpOrders';
import Student from '../models/Student';

class HelpOrdersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;
    const { question } = req.body;

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student not exists' });
    }

    const { name } = studentExists;

    const help = await HelpOrders.create({
      student_id: id,
      student_name: name,
      question,
    });

    return res.json(help);
  }

  async index(req, res) {
    const { id } = req.params;

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student not exists' });
    }

    const helporders = await HelpOrders.find({
      student_id: id,
    }).sort({ createdAt: 'desc' });

    return res.json(helporders);
  }
}

export default new HelpOrdersController();
