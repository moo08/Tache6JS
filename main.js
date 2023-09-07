// creation du tableaux
let mois = [ 'Janvier', ' Fevrier', ' Mars', ' Avril', ' Mai', ' Juin', ' Juillet' ];
document.write(mois + `<br>`+ `<br>`)


// retirer la dernière valeur du tableau mois.
mois.pop();

// afficher les valeurs du tableau avec document.write.
for(let i of mois){
    document.write(i + `<br>`+ `<br>`);
}

// ajouter la valeur aout. 
mois.push( ' Aout');
document.write(mois + `<br>`+ `<br>`);


// remplacer fevrier par fevrier.
mois[1] = 'Fevrier';

// afficher le nombre de valeur du tableau avec document.write.
document.write(`Le nombre de valeur du tableau est: ${mois.length}` + `<br>`+ `<br>`);

// afficher la troixieme valeur avec document.write.
document.write(`La troixieme valeur du tableau est: ${mois[2]}`);