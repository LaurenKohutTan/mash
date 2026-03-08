function mash() {
    var homes = ["mansion", "apartment", "shack", "house"];
    var jobs = ["McDonald's Playplace Cleaner", "Costco Employee", "Youtube Shorts Production Staff", "Discord Moderator"];
    var brainrotPartner = ["John Pork", "Tung tung tung Sahur", "Tim Cheese", "Jaquavious Pork"];
    var money = ["Millionare", "Unemployed", "Millionare but Vietnamese Currency", "Billionare"];
    var kids = ["1", "2", "3", "4"];
    
    var name1 = document.getElementById("mash").value.trim();

    var index = Math.floor(Math.random() * homes.length);
    var homes1 = homes[index];
    homes.splice(index, 1);

    var index = Math.floor(Math.random() * jobs.length);
    var jobs1 = jobs[index];
    jobs.splice(index, 1);

    var index = Math.floor(Math.random() * brainrotPartner.length);
    var brainrotPartner1 = brainrotPartner[index];
    brainrotPartner.splice(index, 1);

    var index = Math.floor(Math.random() * brainrotPartner.length);
    var money1 = money[index];
    money.splice(index, 1);    

    var index = Math.floor(Math.random() * brainrotPartner.length);
    var kids1 = kids[index];
    kids.splice(index, 1);
    
    mashe.textContent = name1 + " will live in a " + homes1 + ", be a " + jobs1 + ", have " + brainrotPartner1 + " as a pet," + " be a " + money1 + " and will have " + kids1 + " kids."



    var name2 = document.getElementById("mash1").value.trim();
    index = Math.floor(Math.random() * homes.length);
    var homes2 = homes[index];
    homes.splice(index, 1);

    index = Math.floor(Math.random() * jobs.length);
    var jobs2 = jobs[index];
    jobs.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var brainrotPartner2 = brainrotPartner[index];
    brainrotPartner.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var money2 = money[index];
    money.splice(index, 1);    

    index = Math.floor(Math.random() * brainrotPartner.length);
    var kids2 = kids[index];
    kids.splice(index, 1);
    
    mashe1.textContent = name2 + " will live in a " + homes2 + ", be a " + jobs2 + ", have " + brainrotPartner2 + " as a pet," + " be a " + money2 + " and will have " + kids2 + " kids."
    
    var name3 = document.getElementById("mash2").value.trim();
    
    index = Math.floor(Math.random() * homes.length);
    var homes3 = homes[index];
    homes.splice(index, 1);

    index = Math.floor(Math.random() * jobs.length);
    var jobs3 = jobs[index];
    jobs.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var brainrotPartner3 = brainrotPartner[index];
    brainrotPartner.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var money3 = money[index];
    money.splice(index, 1);    

    index = Math.floor(Math.random() * brainrotPartner.length);
    var kids3 = kids[index];
    kids.splice(index, 1);
    
    mashe2.textContent = name3 + " will live in a " + homes3 + ", be a " + jobs3 + ", have " + brainrotPartner3 + " as a pet," + " be a " + money3 + " and will have " + kids3 + " kids."
   
 

    var name4 = document.getElementById("mash3").value.trim();
    index = Math.floor(Math.random() * homes.length);
    var homes4 = homes[index];
    homes.splice(index, 1);

    index = Math.floor(Math.random() * jobs.length);
    var jobs4 = jobs[index];
    jobs.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var brainrotPartner4 = brainrotPartner[index];
    brainrotPartner.splice(index, 1);

    index = Math.floor(Math.random() * brainrotPartner.length);
    var money4 = money[index];
    money.splice(index, 1);    

    index = Math.floor(Math.random() * brainrotPartner.length);
    var kids4 = kids[index];
    kids.splice(index, 1);
    
    mashe3.textContent = name4 + " will live in a " + homes4 + ", be a " + jobs4 + ", have " + brainrotPartner4 + " as a pet," + " be a " + money4 + " and will have " + kids4 + " kids."
    
}


