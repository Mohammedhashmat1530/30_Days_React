## fetch

JavaScript provides a fetch API to make HTTP requests
Fetch might not be supported by all browsers therefore we have install addition package for browser supports

if we use Axios we do not need to use additional package for browser support

const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })



If we use async and await we handle the error using try and catch. 

const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

## Axios
Axios is a third party package and we need to install it using npm
It is the most popular way to make HTTP requests(GET, POST, PUT, PATCH, DELETE).

const url = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

