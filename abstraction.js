const Dog = (name, breed, sound) => {
    const dogi = () => console.log(`Hi, my name is ${name} and I'm a ${breed}. So ${sound}`)
    return {
      dogi
  }
}  
  const dog = Dog('Fido', 'Collie', 'Grrrr');   
  const dogen = Dog('Guido', 'Retrivier', 'AvAv');   

dog.dogi();
dogen.dogi();
