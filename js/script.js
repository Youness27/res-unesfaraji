$(function (){
  
    $('.info-list li').click(function (){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.content div').hide()
        $('.' + $(this).data('class')).fadeIn()
       
    }); 
    
  
  
  });






   /* global $ */
// class tabs {
//     constructor (container) {
//         this.container = container ;
//         this.tabs = container.querySelector('.toggle')
//     }
//     init() {
//         this.tabs.array.forEach(tab => {
//             tab.addEventListener('click', e => {
//                 this.toggleTabs(e);
//                 this.toggleContentes(e)
//             })
//         });
//     }
//     // remove active classes
    // toggleTabs(e) {
    //  this.tabs.forEach(tab => tab.classList.remove('active'));
    // e.target.classList.add('active')
    // }
//     toggleContentes(e){
//         this.container.querySelector('.content1').forEach(item => {
//             item.classList.remove('active')
//         });

//         // Add New Content 
//         const selector = e.target.getAttribute('data-target');
//         const content = this.container.querySelector(selector)
//     }
   

// }
// var list = document.querySelectorAll('li');
// list.addEventListener('click', sto => {
//     sto.preventDefault();
// })