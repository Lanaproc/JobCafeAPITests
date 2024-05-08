///<reference types = "Cypress"/>

describe('get search parametrs test', () => {


    it('Verify by id test', () => {
        cy.request('/?id=65428d7c3f7d791f7b3e7b62').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")
        })
    })

    it('Verify by date test', () => {
        cy.request('/?date=2021-07-11').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")

            
        })
    })


    it('Verify by company test', () => {
        cy.request('/?company=legion').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")

        })
    })

    it('Verify by location test', () => {
        cy.request('/?location=Toronto').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")

        })
    })

    it('Verify by description test', () => {
        cy.request('/?description=salary').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")
        })
    })

    it('Verify by combinations test', () => {
        cy.request('/?location=Toronto&company=Apple').then((response) => {
            expect(response.status).equal(200)
            expect(response.statusText).equal("OK")
        })
    })

})






