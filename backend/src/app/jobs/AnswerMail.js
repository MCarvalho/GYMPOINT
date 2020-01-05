import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { student, helporder } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'REPOSTA GYMPOINT',
      template: 'answer',
      context: {
        student: student.name,
        question: helporder.question,
        answer: helporder.answer,
      },
    });
  }
}

export default new AnswerMail();
