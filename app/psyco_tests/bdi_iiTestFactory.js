var app = angular.module('PsytestApp');

app.factory('bdi_iiTest', function bdi_iiTestFactory() {
  return {
    "test_name": "BDI-II",
    "instructions": "Por favor lea cuidadosamente cada grupo de instrucciones, después escoja el que mejor describe la forma en que se ha estado sintiendo las últimas 2 semanas incluyendo el día de hoy. Seleccione el círculo que se encuentra a un costado del enunciado que escogió.\nPor favor no deje ningún grupo en blanco.",
    "entry_groups": [
      {
        "group_name": "sadness",
        "entries": [
          {
            "entry_name": "Tristeza",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento triste"},
              {"value": 1, "text": "Me siento triste la mayoría del tiempo"},
              {"value": 2, "text": "Me siento triste todo el tiempo"},
              {"value": 3, "text": "Me siento tan triste o infeliz que no lo puedo soportar"}
            ]
          }
        ]
      },
      {
        "group_name": "pessimism",
        "entries": [
          {
            "entry_name": "Pesimismo",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento desalentado sobre mi futuro"},
              {"value": 1, "text": "Me siento más desalentado de mi futuro de lo que solía estar"},
              {"value": 2, "text": "No espero que las cosas me salgan bien"},
              {"value": 3, "text": "Siento que mi futuro no tiene esperanza y que únicamente empeorará"}
            ]
          }
        ]
      },
      {
        "group_name": "past_mistakes",
        "entries": [
          {
            "entry_name": "Errores pasados",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento como un fracasado"},
              {"value": 1, "text": "He fallado más de lo que debería"},
              {"value": 2, "text": "Cuando reflexiono en mi pasado, veo demasiados fracasos"},
              {"value": 3, "text": "Siento que soy un completo fracaso como persona"}
            ]
          }
        ]
      },
      {
        "group_name": "loss_of_pleasure",
        "entries": [
          {
            "entry_name": "Pérdida de placer",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "Me causan tanto placer las cosas que me gustan como antes lo hacían"},
              {"value": 1, "text": "No disfruto tanto de las cosas como antes"},
              {"value": 2, "text": "Obtengo muy poco placer de las cosas que antes disfrutaba"},
              {"value": 3, "text": "No puedo obtener placer de las cosas que antes disfrutaba"}
            ]
          }
        ]
      },
      {
        "group_name": "guilty_feelings",
        "entries": [
          {
            "entry_name": "Sentimientos de culpa",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento particularmente culpable"},
              {"value": 1, "text": "Me siento culpable sobre cosas que hice o debí haber hecho"},
              {"value": 2, "text": "Me siento culpable la mayor parte del tiempo"},
              {"value": 3, "text": "Me siento culpable todo el tiempo"}
            ]
          }
        ]
      },
      {
        "group_name": "punishment_feelings",
        "entries": [
          {
            "entry_name": "Sentimiento de castigado",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No siento que me estén castigando"},
              {"value": 1, "text": "Siento que puedo estar siendo castigado"},
              {"value": 2, "text": "Siento que me van a castigar"},
              {"value": 3, "text": "Siento que estoy siendo castigado"}
            ]
          }
        ]
      },
      {
        "group_name": "disapproval_of_myself",
        "entries": [
          {
            "entry_name": "Desagrado con uno mismo",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "Me siento igual conmigo mismo que siempre"},
              {"value": 1, "text": "He perdido confianza en mí mismo"},
              {"value": 2, "text": "Estoy decepcionado de mí mismo"},
              {"value": 3, "text": "Me desagrado"}
            ]
          }
        ]
      },
      {
        "group_name": "self_criticism",
        "entries": [
          {
            "entry_name": "Autocrítica",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me critico ni me culpo más de lo usual"},
              {"value": 1, "text": "Soy más crítico conmigo mismo de lo usual"},
              {"value": 2, "text": "Me critico por todos mis errores y faltas"},
              {"value": 3, "text": "Me culpo de todo lo malo que pasa"}
            ]
          }
        ]
      },
      {
        "group_name": "suicidal_thoughts",
        "entries": [
          {
            "entry_name": "Pensamientos suicidas y muerte",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No tengo ningún pensamiento sobre suicidarme"},
              {"value": 1, "text": "He tenido pensamientos suicidas pero no los llevaría a cabo"},
              {"value": 2, "text": "Quisiera suicidarme"},
              {"value": 3, "text": "Si tuviese la oportunidad me suicidaría"}
            ]
          }
        ]
      },
      {
        "group_name": "cry",
        "entries": [
          {
            "entry_name": "Llorar",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No lloro más de lo usual"},
              {"value": 1, "text": "Lloro más de lo que solía"},
              {"value": 2, "text": "Lloro por cosas insignificantes"},
              {"value": 3, "text": "Me siento como si quisiera llorar pero no puedo"}
            ]
          }
        ]
      },
      {
        "group_name": "excitement",
        "entries": [
          {
            "entry_name": "Agitación",
            "entry_question": "",
            "answers": [
              {"value": 0, "text":  "No me encuentro más agitado de lo usual"},
              {"value": 1, "text":  "Me siento más agitado de lo usual"},
              {"value": 2, "text":  "Me siento tan agitado que me es difícil mantenerme quieto"},
              {"value": 3, "text":  "Me siento tan agitado que tengo que estar moviendome o haciendo algo."}
            ]
          }
        ]
      },
      {
        "group_name": "loss_of_interest",
        "entries": [
          {
            "entry_name": "Pérdida de interés",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No he perdido el interés en otras personas o actividades"},
              {"value": 1, "text": "Estoy menos interesado en otras personas o actividades que antes"},
              {"value": 2, "text": "He perdido la mayoría del interés en otras personas  o actividades"},
              {"value": 3, "text": "Es difícil el interesarme en algo"}
            ]
          }
        ]
      },
      {
        "group_name": "indecision",
        "entries": [
          {
            "entry_name": "Indecisión",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "Tomo decisiones tan bien como siempre"},
              {"value": 1, "text": "Encuentro más difícil tomar decisiones que antes"},
              {"value": 2, "text": "Tengo mucha mayor dificultad en tomar decisiones que antes"},
              {"value": 3, "text": "Tengo problemas en tomar cualquier decisión"}
            ]
          }
        ]
      },
      {
        "group_name": "no_value",
        "entries": [
          {
            "entry_name": "Sin valía",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento como una persona sin valía"},
              {"value": 1, "text": "No me considero tan útil o con tanta valía como solía hacerlo"},
              {"value": 2, "text": "Siento que valgo menos comparado con otras personas"},
              {"value": 3, "text": "Me siento completamente devaluado, sin valía alguna como persona"}
            ]
          }
        ]
      },
      {
        "group_name": "loss_of_energy",
        "entries": [
          {
            "entry_name": "Pérdida de energía",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "Tengo tanta energía como siempre"},
              {"value": 1, "text": "Tengo menos energía de lo usual"},
              {"value": 2, "text": "No tengo suficiente energía para hacer demasiado"},
              {"value": 3, "text": "No tengo suficiente energía para hacer cualquier cosa"}
            ]
          }
        ]
      },
      {
        "group_name": "sleep_paterns_changes",
        "entries": [
          {
            "entry_name": "Cambios en patrones de sueño",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No he experimentado ningún cambio en mis patrones de sueño"},
              {"value": 1, "text": "Duermo algo más de lo usual"},
              {"value": 1, "text": "Duermo algo menos de lo usual"},
              {"value": 2, "text": "Duermo mucho más de lo usual"},
              {"value": 2, "text": "Duermo mucho menos de lo usual"},
              {"value": 3, "text": "Duermo la mayor parte del día"},
              {"value": 3, "text": "Me despierto 1-2 horas más temprano de lo usual y ya no puedo volver a dormir"}
            ]
          }
        ]
      },
      {
        "group_name": "irritability",
        "entries": [
          {
            "entry_name": "Irritabilidad",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me encuentro más irritable de lo usual"},
              {"value": 1, "text": "Estoy más irritable de lo usual"},
              {"value": 2, "text": "Estoy mucho más irritable de lo usual"},
              {"value": 3, "text": "Estoy irritable todo el tiempo"}
            ]
          }
        ]
      },
      {
        "group_name": "appetite_changes",
        "entries": [
          {
            "entry_name": "Cambios en el apetito",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No he tenido cambios en mi apetito"},
              {"value": 1, "text": "Mi apetito es algo menos de lo usual"},
              {"value": 1, "text": "Mi apetito es algo más de lo usual"},
              {"value": 2, "text": "Mi apetito es mucho menos que antes"},
              {"value": 2, "text": "Mi apetito es mucho más que antes"},
              {"value": 3, "text": "No tengo apetito"},
              {"value": 3, "text": "Pienso en comida todo el tiempo"}
            ]
          }
        ]
      },
      {
        "group_name": "concentration_difficulties",
        "entries": [
          {
            "entry_name": "Dificultad para concentrarse",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "Me puedo concentrar tan bien como siempre"},
              {"value": 1, "text": "No me puedo concentrar tan bien como antes"},
              {"value": 2, "text": "Me es difícil mantener mi atención en algo por mucho tiempo"},
              {"value": 3, "text": "No me puedo concentrar en nada"}
            ]
          }
        ]
      },
      {
        "group_name": "tiredness",
        "entries": [
          {
            "entry_name": "Cansancio o fatiga",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No me siento más cansado o fatigado de lo normal"},
              {"value": 1, "text": "Me he cansado o fatigado más fácilmente de lo usual"},
              {"value": 2, "text": "Estoy muy cansado o fatigado como para hacer muchas de las cosas que antes hacía"},
              {"value": 3, "text": "Estoy muy cansado o fatigado como para hacer todo lo que hacía antes"}
            ]
          }
        ]
      },
      {
        "group_name": "loss_of_sex_interest",
        "entries": [
          {
            "entry_name": "Pérdida de interés en el sexo",
            "entry_question": "",
            "answers": [
              {"value": 0, "text": "No he notado cambios recientes en mi interés por el sexo"},
              {"value": 1, "text": "Estoy menos interesado en el sexo de lo que solía estar"},
              {"value": 2, "text": "Estoy mucho menos interesado en el sexo ahora"},
              {"value": 3, "text": "He perdido el interés en el sexo por completo"}
            ]
          }
        ]
      },
      {
        "group_name": "complementary1",
        "entries": [
          {
            "entry_name": "Pregunta complementaria (1)",
            "entry_question": "Aproximadamente, ¿Hace cuánto tiempo ha tenido este malestar emocional?",
            "complementary": true,
            "answers": [
              {"value": 1, "text": "Menos de de 2 semanas"},
              {"value": 2, "text": "2-3 Semanas"},
              {"value": 3, "text": "1-2 meses"},
              {"value": 4, "text": "3-5 meses"},
              {"value": 5, "text": "6-12 meses"},
              {"value": 6, "text": "Más de un año"}
            ]
          }
        ]
      },
      {
        "group_name": "complementary2",
        "entries": [
          {
            "entry_name": "Pregunta complementaria (2)",
            "entry_question": "¿Se siente peor por las mañanas pero va mejorando mientras avanza el día?",
            "complementary": true,
            "answers": [
              {"value": 1, "text": "Si"},
              {"value": 2, "text": "No"}
            ]
          }
        ]
      },
      {
        "group_name": "complementary3",
        "entries": [
          {
            "entry_name": "Pregunta complementaria (3)",
            "entry_question": "¿Ha notado que a pesar de que pasen cosas buenas, éstas no le hacen sentir mejor?",
            "complementary": true,
            "answers": [
              {"value": 1, "text": "Si"},
              {"value": 2, "text": "No"}
            ]
          }
        ]
      }
    ]
  };
});
