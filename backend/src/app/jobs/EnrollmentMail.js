import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { student, plan, endDate, totalPrice } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Matricula GYMPOINT',
      template: 'enrollment',
      context: {
        student: student.name,
        student_id: student.id,
        plan: plan.title,
        price: totalPrice,
        date: format(parseISO(endDate), "'dia' dd 'de' MMMM'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new EnrollmentMail();
