var app = angular.module('PsytestApp');

app.factory('pbqTest', function pbqTestFactory() {
  return {
    test_name: "PBQ",
    instructions: "Por favor, lea a continuación las declaraciones y la escala de CUÁNTO CREE CADA UNA. Trate de juzgar cómo se siente acerca de su declaración la mayor parte del tiempo.",
    entry_groups: [
      {
        group_name: "ev",
        entries: [
          {
            entry_name: "Ev1",
            entry_question: "Soy socialmente inepto e indeseable en el trabajo y/o situaciones sociales.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Ev2",
            entry_question: "Debo evitar situaciones desagradables a toda costa.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Ev3",
            entry_question: "Debo evitar las situaciones en las que llamo la atención, o ser tan discreto como me sea posible.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Ev4",
            entry_question: "Es mejor no hacer nada que intentar algo que podría fallar.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Ev5",
            entry_question: "Si ignoro un problema, este desaparece.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "dep",
        entries: [
          {
            entry_name: "Dep1",
            entry_question: "Necesito a alguien disponible en todo momento para que me ayude a llevar a cabo lo que tengo que hacer o en caso de que algo malo suceda.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Dep2",
            entry_question: "Lo peor que me puede pasar es ser abandonado.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Dep3",
            entry_question: "Si no soy amado, siempre seré infeliz.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Dep4",
            entry_question: "Debo ser sumiso para tener a la gente de buenas conmigo.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Dep5",
            entry_question: "Necesito que otros me ayuden a tomar decisiones o que me digan que hacer.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "oc",
        entries: [
          {
            entry_name: "OC1",
            entry_question: "Tengo que depender de mí mismo para ver que las cosas se hagan bien.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "OC2",
            entry_question: "Es importante hacer un trabajo perfecto en todo.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "OC3",
            entry_question: "Tengo que estar en perfecto control de mis emociones.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "OC4",
            entry_question: "Fallas, defectos o errores son intolerables.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "OC5",
            entry_question: "Mi forma de hacer las cosas, es generalmente la mejor manera.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "as",
        entries: [
          {
            entry_name: "As1",
            entry_question: "Está bien mentir y engañar mientras no me descubran.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "As2",
            entry_question: "Otras personas son débiles y se merecen que se aprovechen de ellos.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "As3",
            entry_question: "Debo hacer todo lo que quiera mientras no me atrapen.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "As4",
            entry_question: "Como puedo salirme con la mía, no tengo que preocuparme por las consecuencias.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "As5",
            entry_question: "Si la gente no puede cuidarse a sí misma, es su problema.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "na",
        entries: [
          {
            entry_name: "Na1",
            entry_question: "Dado que soy tan superior tengo derecho a un trato especial y privilegios.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Na2",
            entry_question: "Es muy importante obtener reconocimiento, halagos y admiración.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Na3",
            entry_question: "La gente debe reconocer lo especial que soy.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Na4",
            entry_question: "Las necesidades de otras personas no deben interferir con las mías.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Na5",
            entry_question: "Trato de socializar únicamente con gente de mi status o nivel.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "hi",
        entries: [
          {
            entry_name: "Hi1",
            entry_question: "Para ser feliz, necesito que otras personas me presten atención.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Hi2",
            entry_question: "La manera de obtener lo que quiero es deslumbrar o divertir a la gente.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Hi3",
            entry_question: "Es terrible si la gente me ignora.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Hi4",
            entry_question: "Me gusta ser el centro de atención.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Hi5",
            entry_question: "La gente me presta atención sólo si actúo de manera extrema.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "esq",
        entries: [
          {
            entry_name: "Esq1",
            entry_question: "Disfruto más hacer las cosas por mí mismo que con otras personas.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Esq2",
            entry_question: "En muchas situaciones, estoy mejor estando solo.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Esq3",
            entry_question: "Mi privacidad es mucho más importante que la cercanía con la gente.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Esq4",
            entry_question: "Puedo usar a la gente para mis propósitos, mientras no me involucre.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Esq5",
            entry_question: "Las relaciones son desordenadas, terminan mal e interfieren con mi libertad.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "par",
        entries: [
          {
            entry_name: "Par1",
            entry_question: "Tengo que estar con la guardia alta en todo momento.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Par2",
            entry_question: "No es seguro confiar en otras personas.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Par3",
            entry_question: "Si la gente actúa amigablemente, seguramente es porque quieren algo.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Par4",
            entry_question: "La gente se aprovecharía de mi si se los permito.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Par5",
            entry_question: "Si las personas averiguan cosas de mi, van a utilizarlas en mi contra.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      },
      {
        group_name: "lim",
        entries: [
          {
            entry_name: "Lim1",
            entry_question: "Si las personas se acercan a mi, va a descubrir mi verdadero “yo” y me rechazarán.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Lim2",
            entry_question: "Si tengo emociones desagradables se intensificarán y se saldrán de control.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Lim3",
            entry_question: "Cualquier señal de tensión en una relación indica que la relación está mal y debo terminarla.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Lim4",
            entry_question: "Soy débil y necesito de la gente.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          },
          {
            entry_name: "Lim5",
            entry_question: "Las personas cercanas a mí pueden ser desleales o infieles.",
            answers: [
              {value: 4, text:	"Creo totalmente"},
              {value: 3, text:	"Creo mucho"},
              {value: 2, text:	"Creo moderadamente"},
              {value: 1, text:	"Creo poco"},
              {value: 0, text:	"No lo creo"}
            ]
          }
        ]
      }
    ]
  };
});
