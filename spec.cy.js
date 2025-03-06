describe('template spec', () => {
  it('passes', () => {
    let reps = 0
    do {
    cy.visit('https://forms.gle/bvit9xHwEEeJ3ejY8')

    cy.wait(500);
    cy.get('.lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd').click()
    cy.wait(500);

    //Filter 1

    cy.get('#i5 > .vd3tt > .AB7Lab').click();
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();

    //Filter 2
    let varia = Math.floor(Math.random()*5);
    let selectors = [":nth-child(1) > .docssharedWizToggleLabeledContainer", 
                      ":nth-child(2) > .docssharedWizToggleLabeledContainer",
                      ":nth-child(3) > .docssharedWizToggleLabeledContainer",
                      ":nth-child(4) > .docssharedWizToggleLabeledContainer",
                      ":nth-child(5) > .docssharedWizToggleLabeledContainer",
                      ":nth-child(6) > .docssharedWizToggleLabeledContainer"]
    cy.get(selectors[varia]).click();
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();
    cy.wait(500);
    cy.get('[jsname="OCpkoe"] > .l4V7wb').click();


    //Citra Merek

    selectors =       [ ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*3);
    cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)').click();
    
    selectors =       [ ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();                 

    selectors =       [ ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();   
    
    selectors =       [ ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click(); 
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();
    
    //Kepercayaan Merek

    selectors =       [ ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();
    
    //Loyalitas Merek
    selectors =       [ ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(5) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(6) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(7) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();

    selectors =       [ ':nth-child(8) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(2)',
                        ':nth-child(8) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(3)',
                        ':nth-child(8) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(4)',
                        ':nth-child(8) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(5)',
                        ':nth-child(8) > [jsmodel="CP1oW"] > .geS5n > .PY6Xd > .lLfZXe > .H2Gmcc > .N9Qcwe > :nth-child(6)',
                      ] 
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();
    
    //Profil Responden 

    selectors = ['#i5 > .vd3tt > .AB7Lab','#i8 > .vd3tt > .AB7Lab']
    varia = Math.floor(Math.random()*2);
    cy.get(selectors[varia]).click();

    selectors = ['#i15 > .vd3tt > .AB7Lab','#i18 > .vd3tt > .AB7Lab','#i21 > .vd3tt > .AB7Lab',
                '#i24 > .vd3tt > .AB7Lab','#i27 > .vd3tt > .AB7Lab']
    varia = Math.floor(Math.random()*5);
    cy.get(selectors[varia]).click();
    
    selectors = ['#i34 > .vd3tt > .AB7Lab','#i37 > .vd3tt > .AB7Lab',
                '#i40 > .vd3tt > .AB7Lab','#i43 > .vd3tt > .AB7Lab','#i46 > .vd3tt > .AB7Lab']
    varia = Math.floor(Math.random()*4);
    cy.get(selectors[varia]).click();

    selectors = ['#i53 > .vd3tt > .AB7Lab','#i56 > .vd3tt > .AB7Lab',
                '#i59 > .vd3tt > .AB7Lab','#i62 > .vd3tt > .AB7Lab']
    
    varia = Math.floor(Math.random()*4)
    cy.get(selectors[varia]).click();

    selectors = ['#i69 > .vd3tt > .AB7Lab','#i72 > .vd3tt > .AB7Lab',
                '#i75 > .vd3tt > .AB7Lab','#i78 > .vd3tt > .AB7Lab']

    varia = Math.floor(Math.random()*4)
    cy.get(selectors[varia]).click();

   cy.get('.Y5sE8d > .l4V7wb > .NPEfkd').
   click();

      reps = reps+1
      console.log('Repitition: ' + reps);
    }
     while (reps<2);
     cy.wait(500);
  })
})