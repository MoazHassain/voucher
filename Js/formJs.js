console.log(mdc);

    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar =mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

    const drawer=mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

    topAppBar.setScrollTarget(document.getElementById("myDrawer"));
    topAppBar.listen("MDCTopAppBar:nav",() =>{
        drawer.open=!drawer.open;
    });

    const textFieldElement=[].slice.call(document.querySelectorAll(".mdc-text-field"));
    textFieldElement.forEach((textField1) => {
      mdc.textField.MDCTextField.attachTo(textField1);
    });

    const select =  mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));

    // const select = mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));

    // select.listen('MDCSelect:change', () => {
    // alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
    // });

    const buttonRipple =mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));

    


  



  