//CRUD

let cats = ["Fluffy"];

exports.create = (req, res) => {
  const { name } = req.params;

  cats.push(name);
  res.send(cats);
};

exports.read = (req, res) => {
  console.log(req.user);
  res.send(cats);
};

exports.update = (req, res) => {
  const { name } = req.params;

  /*  cats = cats.map((cat) => {
    if (cat === name) {
      return cat + "_updated";
    }
    return cat;
  }); */
  let firstCat = cats.find((element) => element == name);
  let ifirstCat = cats.indexOf(firstCat);
  cats[ifirstCat] += "_updated";

  res.send(cats);
};
exports.delete = (req, res) => {
  const { name } = req.params;

  cats = cats.filter((cat) => cat !== name);
  res.send(cats);
};
