/*
var App = React.createClass({
    render: function() {
        return (React.createElement("div", null, "Welcome to Adequate, Mike!"));
    }
});
React.render(React.createElement(App), document.body);*/

/*var App = React.createClass({  render: function(){    return <div>     Hello, from Shawn!    </div>;  }
});
React.render(React.createElement(App), document.body);*/


var App = React.createClass({
    render: function() {
        return <div >
            <
            h1 > Recent Changes < /h1> <
            table >
            <
            thead >
            <
            th > When < /th> <
            th > Who < /th > <
            th > Description < /th> <
            /thead > <
            tr >
            <
            td > 2 minutes ago < /td> <
            td > Jill Dupre < /td > <
            td > Created new account < /td> <
            /tr > <
            tr >
            <
            td > 1 hour ago < /td> <
            td > Lose White < /td > <
            td > Added fist chapter < /td> <
            /tr > <
            tr >
            <
            td > 2 hours ago < /td> <
            td > Jordan Whash < /td > <
            td > Created new account < /td> <
            /tr > <
            /table> <
            /div>

    }
});
React.render(React.createElement(App), document.body);


/*var App = React.createClass({
  render: function(){  var data = [{ "when": "2 minutes ago",              "who": "Jill Dupre",              "description": "Created new account"            },            {              "when": "1 hour ago",              "who": "Lose White",              "description": "Added fist chapter"            },            {              "when": "2 hours ago",              "who": "Jordan Whash",              "description": "Created new account"            }];
  var rows = data.map(function(row){  return  <tr>     <td>{row.when}</td>     <td>{row.who}</td>     <td>{row.description}</td>   </tr>  }) return <table> <thead>   <th>When</th>   <th>Who</th>   <th>Description</th> </thead> {rows} </table>}
  });
  React.render(React.createElement(App), document.body);*/
