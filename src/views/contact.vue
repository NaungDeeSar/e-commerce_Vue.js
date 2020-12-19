<template>
   <div class="container my-4 py-5">
    <div class="py-2">
    <span><a href="#">Home</a></span>
    <i class="fa fa-chevron-right text-danger" style="font-size:12px"></i>
    <span><a href="#">Contact</a></span>
       <hr>
    </div>
    
     <div class="row py-3">
       <div class="col-md-5">
       
        <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="form-control">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" name="email" class="form-control">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" name="phone"  class="form-control">
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea  class="form-control"></textarea>
      </div>
      <div class="form-group">
        
        <button class="btn btn-success">Send Message</button>
      </div>
    </form>
        
       </div>
        <div class="col-md-7">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.307994847409!2d96.12038571434641!3d16.860652022221355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194f0ebe9332f%3A0x5190bb91abf32b9d!2sThamine!5e0!3m2!1sen!2smm!4v1607414141184!5m2!1sen!2smm" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
     </div>
  </div>
</template>

<script type="text/javascript">
	
  export default{
    
    data(){
      return {        
        subcategories:[]
      }
    }
}
</script>
