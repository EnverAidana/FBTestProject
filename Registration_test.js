Feature('Registration');

Scenario('Registration in FaceBook', ({ I }) => {
    I.amOnPage('')
    I.waitForElement({xpath:"//*[@id='pass']"})
    I.click('[data-testid="open-registration-form-button"]')

    I.wait(3)

    I.fillField("firstname","Test")
    I.fillField("lastname","User")
    I.fillField("reg_email__","testUser12AERGP@gmail.com")
    I.waitForText("Повторно введите ваш эл. адрес")
    I.fillField("reg_email_confirmation__","testUser12AERGP@gmail.com")   
    I.fillField("reg_passwd__","test123123")
    I.selectOption('День','9')
    I.selectOption('Месяц','мая')
    I.selectOption('Год','1994')
    I.checkOption('Женщина')
    I.click("websubmit")

    I.wait(3)

    I.waitForText("Введите код из эл. письма")
    
});
