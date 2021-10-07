const template = document.querySelector('.cv');
const toggleNameStyleDiv = document.querySelector('.toggleNameStyleDiv');
const toggleDesignationStyleDiv = document.querySelector('.toggleDesignationStyleDiv');
const toggleContactStyleDiv = document.querySelector('.toggleContactStyleDiv');
const toggleHeadingStyleDiv = document.querySelector('.toggleHeadingStyleDiv');
const nameStyleBox = document.querySelector('.nameStyleBox');
const designationStyleBox = document.querySelector('.designationStyleBox');
const contactStyleBox = document.querySelector('.contactStyleBox');
const headingStyleBox = document.querySelector('.headingStyleBox');
const userName = document.querySelector('#userName');
const userDesignation = document.querySelector('#userDesignation');
const contactInfo = document.querySelectorAll('.contactInfo');
const listStyle = document.querySelectorAll('#listStyle');
const heading = document.querySelectorAll('#heading');
const downloadBtn = document.querySelector('#downloadBtn');
const cv = document.querySelector('.cv');
const error = document.querySelectorAll('.error-check');


// Background Color
function getTemplateBg(value){
    template.style.backgroundColor = value;
}

// User Name Style
function getNameTextColor(value){
    userName.style.color = value;
}
function getNameFontFamily(value){
    userName.style.fontFamily = value;
}
function getNameFontSize(value){
    userName.style.fontSize = value+'px';
}

//  User Designation style
function getDesignationTextColor(value){
    userDesignation.style.color = value;
}
function getDesignationFontFamily(value){
    userDesignation.style.fontFamily = value;
}
function getDesignationFontSize(value){
    userDesignation.style.fontSize = value+'px';
}


// User Contact Style
function getContactTextColor(value){
    contactInfo.forEach(function (i){
        i.style.color = value;
    })
}
function getContactFontFamily(value){

    contactInfo.forEach(function(i){
        i.style.fontFamily = value;
    })
}
function getContactFontSize(value){
    contactInfo.forEach(function(i){
        i.style.fontSize = value+'px';
    })
}

// Heading Style
function getHeadingTextColor(value){
    heading.forEach(function(i){
        i.style.color = value;
    })
}
function getHeadingFontFamily(value){
    heading.forEach(function(i){
        i.style.fontFamily = value;
    })
}
function getHeadingFontSize(value){
    heading.forEach(function(i){
        i.style.fontSize = value+'px';
    })
}


// List Style
function getListyStyle(value){
    listStyle.forEach(function(i){
        i.style.listStyleType = value;
    })
}

// Toggle the Name
toggleNameStyleDiv.addEventListener('click', function(){
    if(nameStyleBox.style.display === 'none'){
        nameStyleBox.style.display = 'block';
    }else{
        nameStyleBox.style.display = 'none';
    }
});
// Toggle the Designation
toggleDesignationStyleDiv.addEventListener('click', function(){
    if(designationStyleBox.style.display === 'none'){
        designationStyleBox.style.display = 'block';
    }else{
        designationStyleBox.style.display = 'none';
    }
});
// Toggle the Contact 
toggleContactStyleDiv.addEventListener('click', function(){
    if(contactStyleBox.style.display === 'none'){
        contactStyleBox.style.display = 'block';
    }else{
        contactStyleBox.style.display = 'none';
    }
})

// Toggle The Heading 
toggleHeadingStyleDiv.addEventListener('click', function(){
    if(headingStyleBox.style.display === 'none'){
        headingStyleBox.style.display = 'block';
    }else{
        headingStyleBox.style.display = 'none';
    }
})

// Print The Document 
downloadBtn.addEventListener('click', function(){
    // if(error.forEach(function(w){
    //     alert('Error');
    //     })
    // )
    var opt = {
        filename: 'my_resume.pdf',
        html2canvas: {scale: 1},
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait'}
    }
    html2pdf().set(opt).from(cv).save();
   
});
