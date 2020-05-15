<template>
    <div>
        <div class="app">
            <div class="overlay">
                <div class="player-scores player-score-1">
                    1
                </div>
                <div class="player-name-wrap">
                    <div class="player-names player-name-1">
                        <span>Erika</span>
                    </div>
                </div>
                <div class="player-cam"></div>
                <div class="player-scores player-score-2">
                    2
                </div>
                <div class="player-name-wrap">
                    <div class="player-names player-name-2">
                        <span>Ginamudkipz</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

#0c0c0c
border-top: 3px solid #0078df;
border-top: 3px solid #fe2f47;

<style>
    @import url('https://fonts.googleapis.com/css?family=Baloo+Chettan+2:400,500,600,700&display=swap');

    html, body {
        margin: 0;
    }

    .overlay {
        user-select: none;
    }

    .player-scores {
        display: inline-block;
        position: absolute;
        bottom: 4.3%;
        background-image: linear-gradient(to bottom, #200933 75%, #3d0b43);
        height: 32px;
        width: 32px;
        line-height: 32px;
        font-family: 'Baloo Chettan 2', cursive;
        text-align: center;
        font-weight: 700;
        color: #61e2ff;
        text-shadow: 0 0 2px #001716, 0 0 5px #03edf9b6, 0 0 10px #ff63;
        box-shadow: 0 0 10px #fc199a;
        border-radius: 2px;
    }

    .player-name-wrap {
        display: block;
        position: absolute;
        bottom: 4%;
        width: 100%;
        height: 20px;
        filter: drop-shadow(5px 4px 12px #fc199aee);
    }

    .player-names {
        display: inline-block;
        position: absolute;
        bottom: 4.2%;
        width: 160px;
        background-image: linear-gradient(to bottom, #200933 75%, #3d0b43);
        font-family: 'Baloo Chettan 2', cursive;
        font-weight: 500;
        color: #fc0;
        text-shadow: 0 0 2px #100c0f, 0 0 3px #fa09, 0 0 5px #fa09, 0 0 10px #fa09;
        clip-path: polygon(24% 0%, 100% 1%, 100% 96%, 0 96%);
        height: 20px;
    }

    .player-names span {
        position: relative;
        display: block;
        text-align: center;
        margin-left: 32px;
        top: -4px;
        font-size: 1.15em;
    }

    .player-name-1 {
        left: 24.525%;
    }

    .player-name-2 {
        left: 63.1%;
    }

    .player-score-1 {
        left: 20.095%;
    }

    .player-score-2 {
        left: 58.7%;
    }

    .player-cam {
        position: absolute;
        left: 0.9%;
        bottom: 1.3%;
        background-image: linear-gradient(to bottom, #200933 75%, #3d0b43);
        width: 190px;
        height: 115px;
    }

</style>
