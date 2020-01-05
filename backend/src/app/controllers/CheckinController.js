import { subDays } from 'date-fns';
import Checkin from '../schemas/Checkin';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
    const { id } = req.params;
    const today = new Date();

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student not exists' });
    }

    const checkins = await Checkin.find({
      student: id,
      createdAt: {
        $gte: subDays(today, 7),
        $lt: today,
      },
    }).sort({ createdAt: 'desc' });

    if (checkins.length >= 5) {
      return res.json({ error: 'Week check-in limit exceeded' });
    }

    const checkin = await Checkin.create({
      student: id,
    });

    return res.json(checkin);
  }

  async index(req, res) {
    const { id } = req.params;

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student not exists' });
    }

    const checkins = await Checkin.find({
      student: id,
    }).sort({ createdAt: 'desc' });

    return res.json(checkins);
  }
}

export default new CheckinController();
