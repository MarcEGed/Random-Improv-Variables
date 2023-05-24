function randomScale(){
    const Scales = ["C major","C minor","D major","D minor","E major","E minor","F major","F minor","G major","G minor","A major","A minor","B major","B minor",
    "C# major","C# minor","D# major","D# minor","F# major","F# minor","G# major","G# minor","A# major","A# minor"];
    var current_pull = Math.floor(Math.random()*Scales.length);
    document.getElementById("scale").innerHTML = Scales[current_pull];
}

function randomEmotion(){
    const Emotions = ["Despair", "Happiness",
    "Anger", "Fear", "Calm", "Frustrated", "Ready To Beat Some Ass", "Gratefull"];
    var current_pull = Math.floor(Math.random()*Emotions.length);
    document.getElementById("emotion").innerHTML = Emotions[current_pull];
}

function randomTimeSig(){
    const TimeSigs = ["4/4", "3/4", "2/4", "9/8", "6/8", "7/8", "Polyrythms Necessary"]
    var current_pull = Math.floor(Math.random()*TimeSigs.length);
    document.getElementById("timeSig").innerHTML = TimeSigs[current_pull];
}

function randomStyle(){
    const Styles = ["Jazz", "Classical", "Emotional Modern", "Romantic Era Classical", "Jpop/Jrock", "Metal", "Videogame Music"];
    var current_pull = Math.floor(Math.random()*Styles.length);
    document.getElementById("style").innerHTML = Styles[current_pull];
}

function randomChords(){
    const major = ["I", "II", "bII", "III", "bIII", "IV", "V", "VI", "bVI", "VII", "bVII"];
    const minor = ["i", "ii", "bii", "iii", "biii", "iv", "v", "vi", "bvi", "vii", "bVII"];
    const dim = ["ii°", "iii°", "iv°", "v°", "vi°", "vii°"];
    const aug = ["II+", "III+", "IV+","V+", "VI+", "VII+"];

    var final_progression = '';

    for (let i = 0; i < 4; i++){
        var random_number = Math.floor(Math.random() * 4);
        if (random_number == 0){  //major
            var chord = major[Math.floor(Math.random()*major.length)];
        }else if (random_number == 1){ //minor
            var chord = minor[Math.floor(Math.random()*minor.length)];
        }else if (random_number == 2){ //dim
            var chord = dim[Math.floor(Math.random()*dim.length)];
        }else if (random_number == 3){ // aug
            var chord = aug[Math.floor(Math.random()*aug.length)];
        }
        if (i == 3){
            final_progression += chord;
        }else{
            final_progression += chord + " -> ";
        }
    document.getElementById("chords").innerHTML = final_progression;
    }


}