export const newDate = (date) => {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago','Set','Out','Nov','Dez'];
  const newDate = new Date(date);
  const dateFormated = ((newDate.getDate() + 1 + ' ' + meses[(newDate.getMonth())] + ' ' + newDate.getFullYear()));

  return dateFormated;
};