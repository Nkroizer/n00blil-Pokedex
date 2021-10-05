import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import grassTile from "../assets/Game/grassTile.png";
import fieldTile from "../assets/Game/fieldTile.png";
import trainerDefault from "../assets/Game/pfront1.png";
import grassTileTrainer from "../assets/Game/grassTileTrainer.png";
import trainerFront2 from "../assets/Game/pfront2.png";
import trainerFront3 from "../assets/Game/pfront3.png";
import trainerBack1 from "../assets/Game/pback1.png";
import grassTileTrainerBack from "../assets/Game/grassTileTrainerBack.png";
import trainerBack2 from "../assets/Game/pback2.png";
import trainerBack3 from "../assets/Game/pback3.png";
import trainerRight1 from "../assets/Game/pright1.png";
import grassTileTrainerRight from "../assets/Game/grassTileTrainerRight.png";
import trainerRight2 from "../assets/Game/pright2.png";
import trainerLeft1 from "../assets/Game/pleft1.png";
import grassTileTrainerLeft from "../assets/Game/grassTileTrainerLeft.png";
import trainerLeft2 from "../assets/Game/pleft2.png";
import leftArrow from "../assets/Game/left.png";
import downArrow from "../assets/Game/down.png";
import rightArrow from "../assets/Game/right.png";
import upArrow from "../assets/Game/up.png";
import padCenter from "../assets/Game/square.png";

const GameScreen = () => {
    const [playerPosition, setplayerPosition] = useState({ x: 0, y: 0, facing: 1 });
    const [boardRefresh, setboardRefresh] = useState([
        [
            {
                displayImage: trainerDefault // 0,0
            },
            {
                displayImage: fieldTile // 0,1
            },
            {
                displayImage: fieldTile // 0,2
            },
            {
                displayImage: fieldTile // 0,3
            },
            {
                displayImage: fieldTile // 0,4
            },
            {
                displayImage: fieldTile // 0,5
            },
            {
                displayImage: fieldTile // 0,6
            },
            {
                displayImage: fieldTile // 0,7
            }
        ],
        [
            {
                displayImage: fieldTile // 1,0
            },
            {
                displayImage: grassTile // 1,1
            },
            {
                displayImage: grassTile // 1,2
            },
            {
                displayImage: grassTile // 1,3
            },
            {
                displayImage: grassTile // 1,4
            },
            {
                displayImage: grassTile // 1,5
            },
            {
                displayImage: grassTile // 1,6
            },
            {
                displayImage: fieldTile // 1,7
            }
        ],
        [
            {
                displayImage: fieldTile // 2,0
            },
            {
                displayImage: grassTile // 2,1
            },
            {
                displayImage: grassTile // 2,2
            },
            {
                displayImage: grassTile // 2,3
            },
            {
                displayImage: grassTile // 2,4
            },
            {
                displayImage: grassTile // 2,5
            },
            {
                displayImage: grassTile // 2,6
            },
            {
                displayImage: fieldTile // 2,7
            }
        ],
        [
            {
                displayImage: fieldTile // 3,0
            },
            {
                displayImage: grassTile // 3,1
            },
            {
                displayImage: grassTile // 3,2
            },
            {
                displayImage: grassTile // 3,3
            },
            {
                displayImage: grassTile // 3,4
            },
            {
                displayImage: grassTile // 3,5
            },
            {
                displayImage: grassTile // 3,6
            },
            {
                displayImage: fieldTile // 3,7
            }
        ],
        [
            {
                displayImage: fieldTile // 4,0
            },
            {
                displayImage: grassTile // 4,1
            },
            {
                displayImage: grassTile // 4,2
            },
            {
                displayImage: grassTile // 4,3
            },
            {
                displayImage: grassTile // 4,4
            },
            {
                displayImage: grassTile // 4,5
            },
            {
                displayImage: grassTile // 4,6
            },
            {
                displayImage: fieldTile // 4,7
            }
        ],
        [
            {
                displayImage: fieldTile // 5,0
            },
            {
                displayImage: grassTile // 5,1
            },
            {
                displayImage: grassTile // 5,2
            },
            {
                displayImage: grassTile // 5,3
            },
            {
                displayImage: grassTile // 5,4
            },
            {
                displayImage: grassTile // 5,5
            },
            {
                displayImage: grassTile // 5,6
            },
            {
                displayImage: fieldTile // 5,7
            }
        ],
        [
            {
                displayImage: fieldTile // 6,0
            },
            {
                displayImage: grassTile // 6,1
            },
            {
                displayImage: grassTile // 6,2
            },
            {
                displayImage: grassTile // 6,3
            },
            {
                displayImage: grassTile // 6,4
            },
            {
                displayImage: grassTile // 6,5
            },
            {
                displayImage: grassTile // 6,6
            },
            {
                displayImage: fieldTile // 6,7
            }
        ],
        [
            {
                displayImage: fieldTile // 7,0
            },
            {
                displayImage: fieldTile // 7,1
            },
            {
                displayImage: fieldTile // 7,2
            },
            {
                displayImage: fieldTile // 7,3
            },
            {
                displayImage: fieldTile // 7,4
            },
            {
                displayImage: fieldTile // 7,5
            },
            {
                displayImage: fieldTile // 7,6
            },
            {
                displayImage: fieldTile // 7,7
            }
        ]
    ]);

    const movePlayer = (upPosition, rightPosition) => {
        const currentX = playerPosition.x;
        const currentY = playerPosition.y;

        var newX = currentX;
        var newY = currentY;
        var newFacing = playerPosition.facing;
        var trainetImage = trainerDefault;
        var tileImage = grassTile;
        var inGrass = true;

        if (currentX == 0 || currentX == 7 || currentY == 0 || currentY == 7) {
            tileImage = fieldTile;
        }


        if (currentX + upPosition <= 7 && currentX + upPosition >= 0) {
            newX = currentX + upPosition;
        }

        if (currentY + rightPosition <= 7 && currentY + rightPosition >= 0) {
            newY = currentY + rightPosition;
        }

        if (newX == 0 || newX == 7 || newY == 0 || newY == 7) {
            inGrass = false;
        }

        if (upPosition == 1) {
            newFacing = 1;
            trainetImage = inGrass ? grassTileTrainer : trainerDefault;
        } else if (rightPosition == 1) {
            newFacing = 2;
            trainetImage = inGrass ? grassTileTrainerRight : trainerRight1;
        } else if (upPosition == -1) {
            newFacing = 4;
            trainetImage = inGrass ? grassTileTrainerBack : trainerBack1;
        } else if (rightPosition == -1) {
            newFacing = 3;
            trainetImage = inGrass ? grassTileTrainerLeft : trainerLeft1;
        }

        setplayerPosition({ x: newX, y: newY, facing: newFacing });

        var previousBoard = boardRefresh;
        previousBoard[currentX][currentY] = { displayImage: tileImage };
        previousBoard[newX][newY] = { displayImage: trainetImage };
        setboardRefresh(previousBoard);
    };

    return (
        <View>
            <div style={GameTable}>
                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[0][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[1][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[2][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[3][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[4][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[5][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[6][7].displayImage} alt="Logo" />
                    </div>
                </div>

                <div style={GameRow}>
                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][0].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][1].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][2].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][3].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][4].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][5].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][6].displayImage} alt="Logo" />
                    </div>

                    <div style={GameCell}>
                        <img style={GameCellImage} src={boardRefresh[7][7].displayImage} alt="Logo" />
                    </div>
                </div>
            </div>

            <div style={GamePad}>
                <div style={GamePadRow}>
                    <TouchableOpacity
                        onPress={() => {
                            movePlayer(-1, 0)
                        }}>

                        <Image source={upArrow}
                            style={{
                                resizeMode: "contain",
                                height: '40px',
                                width: '40px'
                            }} />
                    </TouchableOpacity>
                </div>

                <div style={GamePadRow}>
                    <TouchableOpacity
                        onPress={() => {
                            movePlayer(0, -1)
                        }}>

                        <Image source={leftArrow}
                            style={{
                                resizeMode: "contain",
                                height: '40px',
                                width: '40px'
                            }} />
                    </TouchableOpacity>

                    <Image source={padCenter}
                        style={{
                            resizeMode: "contain",
                            height: '40px',
                            width: '40px',
                        }} />

                    <TouchableOpacity
                        onPress={() => {
                            movePlayer(0, 1)
                        }}>

                        <Image source={rightArrow}
                            style={{
                                resizeMode: "contain",
                                height: '40px',
                                width: '40px'
                            }} />
                    </TouchableOpacity>
                </div>

                <div style={GamePadRow}>
                    <TouchableOpacity
                        onPress={() => {
                            movePlayer(1, 0)
                        }}>

                        <Image source={downArrow}
                            style={{
                                resizeMode: "contain",
                                height: '40px',
                                width: '40px'
                            }} />
                    </TouchableOpacity>
                </div>

            </div>
        </View>
    )
};

const GameTable = {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20px',
    marginVottom: '20px'
}

const GameRow = {
    display: 'flex'
}

const GameCell = {
    width: '50px',
    height: '50px',
    background: 'rgb(90, 162, 132)',
    padding: '1px'
}

const GameCellImage = {
    height: '47px',
    width: '45px',
}

const GamePad = {
    margin: '10px'
}

const GamePadRow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default GameScreen;