///<reference types = "Cypress"/>


describe('Get Jobs Test', () => {

  it('get all jobs', () => {
    cy.request('/').then((response) =>{
    console.log(response),
    expect(response.status).equal(200),
    expect(response.statusText).equal("OK")
    })
  })


it('verify jobs result list', () => {
    cy.request('/').then((response) =>{
    console.log(response.body.content),
    expect(response.body.content).not.empty
    })
  })


  it('joblisting has all the details', () => {
    cy.request('/').then((response) =>{
    console.log(response.body.content),
    expect(response.body.content[0]).have.property("id"),
    expect(response.body.content[0].id).not.null
    })
  })

  // it('joblisting has all the details.1', () => {
  //   cy.request('/').then((response) =>{
  //   console.log(response.body.content),
  //   expect(response.body.content[0]).have.property("id"),
  //   expect(response.body.content[0].id).equal("654286613f7d791f7b3e7b20")
  //   })
  // })
// there is chance that test may fall because the id (as a top element) will be changed 


it('Search by location', () => {
  cy.request('/?location=Toronto').then((response) =>{
let resultsList = response.body.content
console.log(resultsList)
expect(response.status).equal(200)

 for(let i=0; i<resultsList.length; i++){
  expect(resultsList[i].location).contain('Toronto')
 }
    
  })
})

})