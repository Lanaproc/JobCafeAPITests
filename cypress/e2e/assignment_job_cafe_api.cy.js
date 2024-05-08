///<reference types = "Cypress"/>


describe('Get Gob Cafe', () => {

    it('Verify all eleemnts of the list', () => {
        cy.request('/').then((response) => {
            var result = response.body.content[3]
            console.log(result),
                expect(result).have.property("location"),
                expect(result.location).equal("Halvorsontown")

            expect(result).have.property("id"),
                expect(result.id).equal("65427c013f7d791f7b3e7af6")

            expect(result).have.property("salary"),
                expect(result.salary).equal("100k")

            expect(result).have.property("position"),
                expect(result.position).equal("Product Marketing Analyst")

            expect(result).have.property("link"),
                expect(result.link).contain("http")
        })
    })


})