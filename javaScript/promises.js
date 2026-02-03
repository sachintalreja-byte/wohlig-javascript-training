/*function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      }
      else{
        reject("you DIDN`T walk the dog")
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

        const kitchenCleaned =true;
        if (kitchenCleaned){
            resolve("you clean the kitchen");
        }
        else{
            reject("you DIDN`T clean the kitchen");
        }
      
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashTakenOut = true;
      if (trashTakenOut){
        resolve("you take out the trash");
      }
      else{
        reject("you DIDN`T take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })

  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you finished all the chores");
  });*/
