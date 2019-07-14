<template>
<div>
     <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn modal-trigger" 
    href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
</div>
    
</template>
<script>

document.addEventListener('DOMContentLoaded', function() {
    var elem= document.querySelector('.modal');
    var instance = M.Modal.init(elem, '');
    M.Modal.getInstance(instance).open();
  });

</script>
<style>

</style>
