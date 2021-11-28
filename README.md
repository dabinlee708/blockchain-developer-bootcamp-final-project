Decentralized Game Rental

We're seeing changes in gaming industry where lots of games are no longer physically delivered to customers and instead streamed through cloud gaming instances or delivered digitally with no physical cartridges, CDs, DVDs, Chips and etc. However, there are still large number of games being published and sold in a physical format for various reasons and many gamers prefer the physical copy due to its resale value and being able to sell them or share them with friends. 

Often, pre-owned game titles were either rented from small-medium enterprises (SMEs) or individuals where each game title belongs to the owner and had to be checked if the customer-returned game titles are in a good state after a rental transaction has been completed. This required game owners to have thorough checks on the game titles so that they can be rented out for a longer period of time, increasing the total return of the game. Such things drive towards creating a security deposit for rentals, which would be used to recover the damages if the rented games get damaged or lost. Sounds good? But this creates another problem. Sometimes the security deposit is set higher than the actual value of the game and this may incentivies owners to run with the deposit as they would profit from the transaction even if the game is not returned. As the deposit is kept by the owner, it creates a risk where the owner could run away. Before actual replacement of the game rental service into a smart contract, current version of Smart Contract tries to replace the ledger for rental services. Instead of using an excel file that sits in a store's computer or a poorly-managed database, it is on blockchain, making it transparent and easy to audit. In addition, this removes the store owner/shop owner's intereference as much as possible by only allowing renters and owners to make and sign transactions themselves using their ethereum wallet.

Currently, the smart contract allows new games to be registered, logging of rental state (Rent, ship, receive, return, return-received-by-owner), details of the games being rented and rental fees. Below items are to be covered in the next phase
//Implement tokens to reduce transaction costs
//Deposit, Payout and Withdrawal function upon rental completion

Decentralized Game Rental
1. Game-title owners can rent out their games through decentralized game rental blockchain, without a need to verify the borrower's identity as smart contract ensures sufficient deposit is kept within the smart contract and paid out to the owner if anything goes wrong with the game title
2. As borrowers put deposit, the responsibility of the borrowers include checking if the game is in good condition to confirm that no damage has been done by the previous borrower.
3. Whenever disputes happen, history of rental can be easily verified and tracked down. Good standing history of a particular user could be used to incetivizes the user with lower rental fees since the risk is low as well for the game owner.
4. Upon completion of rental, via smart contract, deposit can be returned immediately after deducting the rental cost.
5. With public access to the chain, anyone can look up on the rental statistics and make informed decisions if they want to buy/sell/rent/borrow game titles depending on the market demand.

Front-end Is available here: https://dabinlee708.github.io/
Smart Contract is available here: 0x125340Cca81f9b9838cB7832b872779F00Bf1f77 (ETHEREUM Kovan)

Directory Structure
<br>
/build/DeSwitch.json #ABI to be copied from here to DeSwitch.js<br>
/contracts/DeSwitch.sol #Smart Contract for Decentralized Exchange in Solidity<br>
/Data/NSWreleases.xml #Switch Games and Game ID data<br>
/migrations/1_initial_migrations.js #migration script<br>
/migrations/2_DeSwitch.js #migration script<br>
/test/DeSwitch_Test.js #Truffle Unit Test Cases<br>
/Frontend/index.html #Front-end HTML<br>
/Frontend/DeSwitch.js #Front-end JavaScript<br>
/Project Requirements/avoiding_common_attacks.md #Security Measures used to avoid common attacks <br>
/Project Requirements/Consensys Walkthrough - Dabin.mp4 #Walkthrough video<br>
/Project Requirements/design_pattern_decisions.md #Design pattern deicisions<br>
/Project Requirements/deployed_address.txt  #Address Smart Contract is deployed on Public Ethereum Network (Ropsten)<br>
/truffle-config.js #Truffle Configurations<br>

Instructions
1. git clone 
git clone https://github.com/dabinlee708/blockchain-developer-bootcamp-final-project
2. Open the cloned repo from Visual Studio Code and intsall Live-server plugin<br>
Visual Studio Code> Extensions (Ctrl+Shift+x)> Live Server and Remote - WSL (If you are on Windows and want to compile, run and deploy from WSL)
3. Install dependencies<br>
npm install truffle chai truffle-assertions ganache-cli @chainlink/contracts @openzeppelin\contracts  truffle-hdwallet-provider dotenv openzeppelin-solidity
4. Within Visual Studio, open terminal and run following commands in order<br>
$cd blockchain-developer-bootcamp-final-project/<br>
$truffle compile <br>
$truffle develop<br>
truffle(develop)> migrate<br>
truffle(develop)> test<br>
6. From Visual Studio Code explorer tab, right click on index.html and click "Open with Live Server (Alt + L Alt + O)
7. Web Browser should display the Web UI for the Decentralized Swtich Game Exchange
8. Click on Connect to MetaMask to authenticate and connect your MetaMask wallet.
9. Network to be used 
If you are deploying locally> Local ganache with your WSL/Ganache IP address and Port


When deployed locally, it should run locally at 127.0.0.1, port 9545.
Walkthrough video is available under /Project Requirements/Consensys Walkthrough - Dabin.mp4
