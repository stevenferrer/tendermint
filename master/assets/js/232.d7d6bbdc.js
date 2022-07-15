(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{806:function(t,e,s){"use strict";s.r(e);var _=s(1),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"block-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-sync"}},[t._v("#")]),t._v(" Block Sync")]),t._v(" "),s("h2",{attrs:{id:"channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" Channel")]),t._v(" "),s("p",[t._v("Block sync has one channel.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("BlockchainChannel")]),t._v(" "),s("td",[t._v("64")])])])]),t._v(" "),s("h2",{attrs:{id:"message-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),s("p",[t._v("There are multiple message types for Block Sync")]),t._v(" "),s("h3",{attrs:{id:"blockrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockrequest"}},[t._v("#")]),t._v(" BlockRequest")]),t._v(" "),s("p",[t._v("BlockRequest asks a peer for a block at the height specified.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Height")]),t._v(" "),s("td",[t._v("int64")]),t._v(" "),s("td",[t._v("Height of requested block")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"noblockresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noblockresponse"}},[t._v("#")]),t._v(" NoBlockResponse")]),t._v(" "),s("p",[t._v("NoBlockResponse notifies the peer requesting a block that the node does not contain it.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Height")]),t._v(" "),s("td",[t._v("int64")]),t._v(" "),s("td",[t._v("Height of requested block")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"blockresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockresponse"}},[t._v("#")]),t._v(" BlockResponse")]),t._v(" "),s("p",[t._v("BlockResponse contains the block requested.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Block")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/spec/core/data_structures.html#block"}},[t._v("Block")])],1),t._v(" "),s("td",[t._v("Requested Block")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"statusrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statusrequest"}},[t._v("#")]),t._v(" StatusRequest")]),t._v(" "),s("p",[t._v("StatusRequest is an empty message that notifies the peer to respond with the highest and lowest blocks it has stored.")]),t._v(" "),s("blockquote",[s("p",[t._v("Empty message.")])]),t._v(" "),s("h3",{attrs:{id:"statusresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statusresponse"}},[t._v("#")]),t._v(" StatusResponse")]),t._v(" "),s("p",[t._v("StatusResponse responds to a peer with the highest and lowest block stored.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Height")]),t._v(" "),s("td",[t._v("int64")]),t._v(" "),s("td",[t._v("Current Height of a node")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("base")]),t._v(" "),s("td",[t._v("int64")]),t._v(" "),s("td",[t._v("First known block, if pruning is enabled it will be higher than 1")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" Message")]),t._v(" "),s("p",[t._v("Message is a "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#oneof",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("oneof")]),t._v(" protobuf type"),s("OutboundLink")],1),t._v(". The "),s("code",[t._v("oneof")]),t._v(" consists of five messages.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("block_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#blockrequest"}},[t._v("BlockRequest")])]),t._v(" "),s("td",[t._v("Request a block from a peer")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("no_block_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#noblockresponse"}},[t._v("NoBlockResponse")])]),t._v(" "),s("td",[t._v("Response saying it doe snot have the requested block")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("block_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#blockresponse"}},[t._v("BlockResponse")])]),t._v(" "),s("td",[t._v("Response with requested block")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[t._v("status_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#statusrequest"}},[t._v("StatusRequest")])]),t._v(" "),s("td",[t._v("Request the highest and lowest block numbers from a peer")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("status_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#statusresponse"}},[t._v("StatusResponse")])]),t._v(" "),s("td",[t._v("Response with the highest and lowest block numbers the store")]),t._v(" "),s("td",[t._v("5")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);