Decentralized Game Rental

We're seeing changes in gaming industry where lots of games are no longer physically delivered to customers and instead streamed through cloud gaming instances or delivered digitally with no physical cartridges, CDs, DVDs, Chips and etc. However, there are still large number of games being published and sold in a physical format for various reasons and many gamers prefer the physical copy due to its resale value and being able to sell them or share them with friends. 

Often, pre-owned game titles were either rented from Small-medium enterprises or individuals where each game title belongs to the owner and had to be checked if the customer-returned game titles are in a good state after a rental transaction has been completed. This required game owners to have thorough checks on the game titles so that they can be rented out for a longer period of time, increasing the total return of the game title being rented. Such things drive towards creating a security deposit for rentals, which would be used to recover the damages if the rented games get damaged or lost. Sounds good? But this creates another problem. Sometimes the security deposit is set higher than the actual value of the game and this may incentivies owners to run with the deposit as they would profit from the transaction even if the game is not returned. As the deposit is kept by the owner, it creates a risk where the owner could run away.

Using blockchain and smart contracts, it is possible to hold the deposit within the smart contract and release the funds to respective parties once the rental transaction has been completed. 

Decentralized Game Rental
1. Game-title owners can rent out their games through decentralized game rental blockchain, without a need to verify the borrower's identity as smart contract ensures sufficient deposit is kept within the smart contract and paid out to the owner if anything goes wrong with the game title
2. As borrowers put deposit, the responsibility of the borrowers include checking if the game is in good condition to confirm that no damage has been done by the previous borrower.
3. Whenever disputes happen, history of rental can be easily verified and tracked down. Good standing history of a particular user could be used to incetivizes the user with lower rental fees since the risk is low as well for the game owner.
4. Upon completion of rental, via smart contract, deposit can be returned immediately after deducting the rental cost.
5. With public access to the chain, anyone can look up on the rental statistics and make informed decisions if they want to buy/sell/rent/borrow game titles depending on the market demand.

Instructions
1. git clone 
git clone https://github.com/dabinlee708/blockchain-developer-bootcamp-final-project
2. Open the cloned repo from Visual Studio Code and intsall Live-server plugin 
Visual Studio Code> Extensions (Ctrl+Shift+x)> Live Server and Remote - WSL (If you are on Windows and want to compile, run and deploy from WSL)
3. Install dependencies
npm install truffle chai truffle-assertions ganache-cli @chainlink/contracts @openzeppelin\contracts
4. Within Visual Studio, open terminal and run following commands in order
dabin@LAPTOP-6JML0LG1:~/consensys/blockchain-developer-bootcamp-final-project$cd blockchain-developer-bootcamp-final-project/
dabin@LAPTOP-6JML0LG1:~/consensys/blockchain-developer-bootcamp-final-project$truffle compile
dabin@LAPTOP-6JML0LG1:~/consensys/blockchain-developer-bootcamp-final-project$truffle develop
truffle(develop)> migrate
truffle(develop)> test
6. From Visual Studio Code explorer tab, right click on index.html and click "Open with Live Server (Alt + L Alt + O)
7. Web Browser should display the Web UI for the Decentralized Swtich Game Exchange
8. Click on Connect to MetaMask to authenticate and connect your MetaMask wallet.
9. Network to be used 
If you are deploying locally> Local ganache with your WSL/Ganache IP address and Port

