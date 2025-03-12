var APP_DATA = {
  "scenes": [
    {
      "id": "0-estarjantar",
      "name": "ESTAR/JANTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3661944278653309,
          "pitch": 0.07753992644204644,
          "rotation": 0,
          "target": "3-hspedes"
        },
        {
          "yaw": -0.7726559442076049,
          "pitch": 0.05083819199296258,
          "rotation": 0,
          "target": "4-banheiro"
        },
        {
          "yaw": -0.9590959997144033,
          "pitch": 0.05096338813273604,
          "rotation": 0,
          "target": "1-sute"
        },
        {
          "yaw": -2.8582045853725013,
          "pitch": 0.1604801400292999,
          "rotation": 0,
          "target": "5-cozinhaservio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sute",
      "name": "SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.686114357071519,
          "pitch": 0.18561476235124275,
          "rotation": 0,
          "target": "0-estarjantar"
        },
        {
          "yaw": -0.135616043193167,
          "pitch": 0.05757148032195758,
          "rotation": 0,
          "target": "2-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-closet",
      "name": "CLOSET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.117867958961014,
          "pitch": -0.011278540960603323,
          "rotation": 0,
          "target": "1-sute"
        },
        {
          "yaw": -1.0789279180682048,
          "pitch": 0.017385708501453934,
          "rotation": 0,
          "target": "4-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hspedes",
      "name": "HÓSPEDES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.350029193163234,
          "pitch": 0.11907660186806623,
          "rotation": 0,
          "target": "0-estarjantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-banheiro",
      "name": "BANHEIRO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1029908693242128,
          "pitch": 0.14034939012920233,
          "rotation": 0,
          "target": "0-estarjantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cozinhaservio",
      "name": "COZINHA/Á.SERVIÇO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7328526747857023,
          "pitch": 0.3399334121075661,
          "rotation": 0,
          "target": "0-estarjantar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
