describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    //console.log('before each!');
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a server and the tips in the server Table',function(){
    submitServerInfo();
    updateServerTable();
    let server1 = document.querySelectorAll('#serverTable tbody tr td');
    expect(server1[0].innerText).toEqual('Alice');
    //expect(server1[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    //console.log('after each!');
    allServers = {};
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    serverId = 0;
  });
});
