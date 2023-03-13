const base = [
  "Arwen Undómiel",
  "Legolas Greenleaf",
  "Elrond Peredhel",
  "Galadriel Nenya",
  "Thranduil Oropherion",
  "Eowyn Arweniel",
  "Celeborn Teleporno",
  "Fëanor Finwëion",
  "Lúthien Tinuviel",
  "Tauriel Oropheriel",
  "Haldir Galadrielleth",
  "Elladan Elrohirion",
  "Elrohir Elladanion",
  "Gil-galad Ereinion",
  "Gwindor Nargothrondion",
  "Idril Celebrindal",
  "Nimrodel Amrothiel",
  "Aredhel Ar-Feiniel",
  "Finduilas Orodrethiel",
  "Glorfindel Ecthelionion",
  "Legelathiel Eldarion",
  "Eärwen Olwëiel",
  "Mithrellas Nimrodeliel",
  "Aegnor Finarfinion",
  "Amarië Finwioniel",
  "Arminas Galathilion",
  "Elenwë Turgoniel",
  "Enerdhil Gwaithuirilion",
  "Erestor Glorfindelion",
  "Finrod Felagundion",
  "Galdor Haldirion",
  "Gwindor Belegion",
  "Iminyë Vanyarin",
  "Ingwë Highking",
  "Irmo Lórienion",
  "Nessa Tulkasiel",
  "Nessa Oromëiel",
  "Nessa Vánaion",
  "Olórin Gandalfion",
  "Orodreth Angrodion",
  "Rúmil Noldorion",
  "Salgant Nargothrondiel",
  "Tilion Arienion",
  "Tuor Idrilion",
  "Varda Elentári",
  "Vingilot Eärendilion",
  "Voronwë Ulmoiel",
  "Yavanna Kementári",
  "Celebrimbor Curufinwion",
  "Melian Thingoliel",
];

const nomecompleto = (req, res) => {
  let numero = Math.floor(Math.random() * base.length + 1);

  let nome = base[numero];

  res.status(200).json({ nome: nome }).end();
};

module.exports = {
  nomecompleto,
};
