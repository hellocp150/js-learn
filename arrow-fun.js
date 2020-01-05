/*function createblog(title)
{
	return alert(`${title}`);
}*/

let cblog = (title,bbody) => { 
if(!title)
{
	throw new Error('tittle required');
}
if(!bbody)
{
	throw new Error('body required');
}
return alert(`${title} - ${bbody}` );

}

cblog('blog title2','blog body');