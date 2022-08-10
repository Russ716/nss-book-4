import { agentList } from "./AgentList.js"
import { businessList } from "./BusinessList.js"
import { businessMFList } from "./ManufacturingBusinesses.js"
import { businessNYList } from "./NewYorkBusinesses.js"

const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${businessList()}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      ${businessMFList()}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${businessNYList()}
  </article>

  <article class="agents">
      <h1>Purchasing Agents</h1>
      ${agentList()}
  </article>
  `
}

renderHTML()