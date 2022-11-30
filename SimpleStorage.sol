//SPDX-License-Identifier: MIT

pragma solidity >= 0.8.7;

contract SimpleStorage{
    //Data types: boolean, unit, int, address, bytes, string

    //boolean datatype is either true or false

    //uint datatype is whole number that is not positive or negative 
    //only positive e.g 0 to 99999999

    //int is a positive or negative whole number e.g -0 to -99999
    //or 0 - 999999

    //And Address datatype is just typical wallet address

    //Declaring a variable

    bool hasFavoriteNumber = true;
    //uint8 to uint256 the 8 and 256 simply specify the amount of bits
    //it will be stored 8bits is 1 byte which means 256bits is 32bytes
    //Initialising a variable without assigning a value to it makes the variable null = zero

    uint256 public favoriteNumber;
    int256 newFavoriteNumber = -5;
    string favoriteNumberInText = "Five";
    address myAddress = 0xB1f7996edd0E42c2aE788BD6Dc32BEb302b6e850;
    //The 32 in front of the bytes here specify the amount of byte
    //Which means 32 bytes and if converted to bits it will be 256 bits
    bytes32 favoriteBytes = "Cat";
    uint256 myNumber = 2349029776837;
    //People public person = People({favoriteNumber: 2, name: "Olagboye", age: 23});
    //If we are to start adding more bunch of people it won't be a
    //a good practice to start copying and pasting them like people1
    //people2 and all that so a better way to create a list of people
    //is to use a data structure called Array[]

    //Mapping should basically be looked as like a dictionary,
    //You use a value to return a value in an array, for instance
    //In the example below, we are using a string name to find the
    //FavoriteNumber stored
    //And in the second example we are using Age to find the Name
    //Of someone stored in the Array
    mapping(string => uint256)public nameToFavoriteNumber;
    mapping (uint256 => string) public ageToName;
    struct People {
        uint256 favoriteNumber;
        string name;
        uint256 age;
    }

    People[] public people;
    //This is a function adding new data to the array
    function addPerson(string memory _name, uint256 _favoriteNumber, uint256 _age) public{
         people.push(People(_favoriteNumber, _name, _age));
         nameToFavoriteNumber[_name] = _favoriteNumber;
         ageToName[_age] = _name;
     }
    //another way to do this is
    function anotherMethodofAddingPerson(string memory _name, uint256 _favoriteNumber, uint256 _age)public{
        People memory newnewPerson = People({favoriteNumber: _favoriteNumber, name: _name, age: _age});
        people.push(newnewPerson);
    }

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }
    //There are six places we can store data in Solidity 
    // 1. Stack, Memory, Storage, Calldata, Code, Logs

    //But for now we will focus on Calldata, Memory, Storage

    //When calldata is used the variable stored is temporary and can't be modified
    //While it can be modified in Memory and is temporary
    //Storage variable is permanent that can be modified


}
//0xd9145CCE52D386f254917e481eB44e9943F39138