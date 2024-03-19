$(function () {
    /**
     * GNB MENU
     */
  
    function toggleAsideGnb(active) {
        $('.gnb').toggleClass('on', active)
        $('.gnb .btn-close').css('display', active? 'block' : 'none' )
        
    }
  
    $('.btn-menu').click(function (e) {
      e.preventDefault()
      toggleAsideGnb(true)
    })
  
    $('.gnb .btn-close').click(function (e) {
      e.preventDefault()
      toggleAsideGnb(false)
    })
  
  })
  