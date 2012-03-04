this is a light weight knowledge management system.

my idea is to make a task manager like taskpaper
but that also allows nested projects
and links to notes or lists.

project: description @param=value link:project
NAME: description @parameters(=value) ->other-project

>other-project

transform this to html

<div id=NAME>
  <label class=name>NAME</label>
  description 
  <a class=param href=#@parameter(=value) data-key=paramname data-value=value>
    @parameter(=value)
  </a> 
  <a class=link href=#other-project>
    other project
  </a>
</div>

it's ugly to read, but stores all the information!
also, it's good to traverse with jQuery!

you will add tags, like @DONE=date to represent tasks that are complete.

or DEADLINE=date

then, easy to sort by like, where "deadline < today & !done" == overdue

but, it's not just for tasks, but also for linked notes.

maybe, make different prefixes for what type of item you want to make?

\*,**,-,>>,@, 1.,2., etc.

these could all refer to different things, like,
* or - means a task. @ or # means a parameter, >> means a link. something: is shorthand for @name=something, but only at the start of the note.

for tasks, allow - -- * ** *- etc. but insist that you can only change style when indentation changes!

to edit it, just use a inplace editing in the browser,
so you can click on something to edit it. need easy way to add a child, or a sibling.
  # buttons for \-> add sub item, -> append item 
  that appear when hovered over a item?

* keyboard controls
  up-down:next-prev, 
  left-right: 
  in-out
  enter: edit
  ctrl-enter: append
  a: append
  s: subtask
  t: tag
  delete: delete

maybe short cut keys for tagging?

hmm, this would work quite well backed by couch.

idea: tag settings,
custom css for specific tags.
so, colour coding, whatever.

you could back this all with couch DB, but it's probably not necessary to get started.
just use append only.
