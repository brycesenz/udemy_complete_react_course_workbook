var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <div>
        <h1 className='text-center page-title'>Examples Component</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Asheville'>Asheville, NC</Link>
          </li>
          <li>
            <Link to='/?location=Richmond'>Richmond, VA</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

module.exports = Examples;


