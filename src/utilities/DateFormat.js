const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

const formatCalenderDate = (date) => {
    // takes date in yyyy-mm-dd and returns in dd/mm/yyyy
    return date.split('-').reverse().join('/')

}

const formatDateToYyyyMmDd = (date) => {
    // const year = date.getFullYear();
    // const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const day = date.getDate().toString().padStart(2, '0');
    // return `${year}-${month}-${day}`;
    console.log("date.split('/').reverse().join('-'): ", date.split('/').reverse().join('-'))
    return date.split('/').reverse().join('-')
  }
export {formatDate, formatCalenderDate, formatDateToYyyyMmDd}