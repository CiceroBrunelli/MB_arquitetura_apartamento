var APP_DATA = {
  "scenes": [
    {
      "id": "0-sute",
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
          "yaw": 1.7695874359582842,
          "pitch": 0.05189714582422944,
          "rotation": 0,
          "target": "1-estarjantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estarjantar",
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
        "yaw": 0.18223290288524474,
        "pitch": 0.03111806218523938,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.9053201108271551,
          "pitch": 0.01514395497152421,
          "rotation": 0,
          "target": "0-sute"
        },
        {
          "yaw": -2.835531532286147,
          "pitch": 0.019247687139106517,
          "rotation": 0,
          "target": "2-cozinha"
        },
        {
          "yaw": -0.7372203867110017,
          "pitch": -0.0014182066328167764,
          "rotation": 0,
          "target": "3-banheiro"
        },
        {
          "yaw": -1.7705100592704675,
          "pitch": -0.02656925633981011,
          "rotation": 0,
          "target": "4-hspedes"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha",
      "name": "COZINHA",
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
          "yaw": 2.773965362551925,
          "pitch": 0.41278851166891073,
          "rotation": 0,
          "target": "1-estarjantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro",
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
          "yaw": -1.0931803826344826,
          "pitch": 0.03298282356925952,
          "rotation": 0,
          "target": "1-estarjantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hspedes",
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
          "yaw": -2.36328647652687,
          "pitch": 0.0599332727992401,
          "rotation": 0,
          "target": "1-estarjantar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
