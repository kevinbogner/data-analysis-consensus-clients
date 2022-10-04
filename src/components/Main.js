import Chart from "./Chart";

const Main = () => {
    return (
        <div>
        <h1>🍴 Forkchoice</h1>
          <a href="https://github.com/kevinbogner/forkchoice-epf">GitHub</a>
          <p>
          Forkchoice aggregates Data of the Consensus Clients and tracks Block Proposals to identify network splits across clients.
          This helps to statistically identify peering issues in the Consensus Client landscape.
          </p>
          <Chart />
          <p>
          These data points might help to further improve the communication among Consensus Clients.
          </p>
      </div>
    )
}

export default Main;