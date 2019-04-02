/*You have been tasked with building a list of email addresses of all of our 
customer's contacts so we can spam them with an email about Miffles the Vampire
 Weiner Dog. */

 /*From that array, extract just the customers' contact email addresses 
 and store them in a new array. You will need a nested array method - 
 meaning one iteration inside another one - since you need to iterate the
  entire array of customers, and then iterate the array of emails for each one. */



  const emailContainer = document.querySelector("#display-container")

  const emailArray = []
  
  
  const customerEmailAddress = customers.forEach((customer) => {
customer.contacts.email.map((email) => emailArray.push(email))
  })

  console.log(emailArray)



  const taco = emailArray.forEach(customer => 
    emailContainer.innerHTML += `
    <p>${customer}</p>`)
   


