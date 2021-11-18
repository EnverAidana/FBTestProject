Feature('Authorization');

Scenario('Authorization and check friends count', ({ I }) => {
    I.amOnPage('')

    I.fillField("email","choi.liza@bk.ru")
    I.fillField("pass","killbill2000")
    I.click('[data-testid="royal_login_button"]')
    I.wait(5)
    I.amOnPage('friends/list')
    I.wait(5)

    try {
        const flashVariableName = page.evaluate( () => {
            $I--> see('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ojkyduve');
            var value = element(el => el.innerText.replace(' друг' || 'друзей', ""))
            var count = parseInt(value)
            return  count;
        });

        console.log(page.evaluate( (varName) => window[varName], flashVariableName ));

        if(flashVariableName <= 1  )
        {
            throw ('More than one friends')
        }
    } catch (Exception) {
    }
});
