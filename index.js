const express = require('express');
const app = express();
const port = 4400;

const models = [
  {
    model: 'Model 1',
    bvCode: 'DH60',
    esrpKarnataka: 114055,
    engineCapacity: 150
  },
  {
    model: 'Model 2',
    bvCode: 'JF37',
    esrpKarnataka: 232040,
    engineCapacity: 400
  },
  
    {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }
      ,
      {
        model: 'Model 2',
        bvCode: 'JF37',
        esrpKarnataka: 232040,
        engineCapacity: 400
      }

];


app.get('/api/models', (req, res) => {
  res.json(models);
});

app.get('/api/models/:bvCode', (req, res) => {
  const bvCode = req.params.bvCode;
  const model = models.find(m => m.bvCode === bvCode);
  if (model) {
    res.json(model);
  } else {
    res.status(404).send('Model not found');
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
