let teams = [];

const config = document.querySelector("#areaTexto")

async function buscar() {
    let aux = config.value.split(".");
    //Format the value
    aux.forEach((element) => {
        let team = {
            name: "",
            members: [],
        };

        let aux2 = element.split("\n");
        aux2.forEach((e) => {
            GetNameTeam(e, aux2)
                ? (team.name = e)
                : team.members.push(GetScoreMembers(e));
        });
        teams.push(team);
    });
    await GetScore(teams);
}

function GetScoreMembers(string) {
    return string.split(" ");
}
function GetNameTeam(string, mainstring) {
    return string == mainstring[0];
}
async function GetScore(teams) {
    teams.forEach((element) => {
        if (element.name) {
            element.members.forEach((e) => {
                let suma = 0;
                let i = 0;
                e.forEach((puntos) => {
                    if (i != 0) {
                        suma += parseInt(puntos)
                    }
                    i++
                });

                console.log(e[0] + " Tiene " + suma);
            });
        }
    });
}
function IsNumber(number) {
    try {
        var num = parseInt(number);
        console.log('True')
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
