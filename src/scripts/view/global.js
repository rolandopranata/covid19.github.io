const global = () => {
  
  async function getData() {
    try {
      const response = await fetch(
        'https://covid19.mathdro.id/api'
      );
      const responseJson = await response.json();
      document.querySelector('global-info').coronaItem = responseJson;
    } catch (error) {
      showMessage(error);
    }
  }

  const showMessage = (message) => {
    alert(message);
  };

  getData();
};

export default global;
