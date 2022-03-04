import { Container, Header } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
import { Breadcrumb } from "semantic-ui-react";

function Blog() {
  return (
    <>
      <br /> <br />
      <Container text>
        <br />
        <Breadcrumb>
          <Breadcrumb.Section>
            <a href="/"> Home </a>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>Blog</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <br />
        <h1 id="morectx"> more context</h1>
        <p>
          hi, im assuming you are someone with more technical knowledge. if not
          ignore this post.{" "}
        </p>
        <br />
        <p>
          nsbm is a sri lankan university which offers some degree. for
          students. they also offer some foreign degrees at the same time. NSBM
          prides itself on being a forward-thinking entity, with the constant
          drive to push boundaries. Thus, it moves onto Phase II of NSBM Green
          University acquiring more land in Pitipana, Homagama to deliver
          greater opportunities to its potential multitudes of students. [1].
          they market themselves pretty good and right now there’s quite lot of
          students at this university.
        </p>
        <br />
        <p>[1] https://www.nsbm.ac.lk/</p> <br />
        <hr />
        <h3> Stay safe out there</h3>
        <p>
          Unfortunately, our world is backwards. if you can market yourself good
          you can fool people.its just how things work today. the world used to
          be meritocracy. [2] we want to think that only hard working , skilled
          and talented individuals are success. but when facing reality its not
          how the world actually works. skills are not that important anymore. i
          have seen many people being more skilled than me not getting jobs and
          opportunities. i personally hate this. i know that's not the majority
          . and i understand that that’s the reality.
        </p>{" "}
        <br />
        <p>
          but the struggle i have goes more deep. i know things like work life
          balance is important but im not like to live that. it sucks for me.
        </p>{" "}
        <br />
        <p>enough about me my opinion lets talk why i did this. </p>
        <br />
        <code>
          {" "}
          [2] government or the holding of power by people selected according to
          merit.
        </code>
        <br />
        <hr />
        <br />
        <p>
          when i joined to this university i used to be happy. because well i am
          a university student. but it didnt took me a long to realize i have
          fallen in to a scam. its sad that 90% friends i used to know didnt
          understood this. they just imagined thats ok. and i had no one to talk
          about this with. but with the time lot of people i used to knew
          realized this. and including me lot of them left this university
          wasting our money here.
        </p>
        <br />
        <p>
          let me give a good example. i remember in my first year. they used to
          teach me programming in c and they started telling how to take a input
          from a user ( a string ) so if you know c you might know lot of ways
          to do this. but what they told us was to use %s and scanf well is that
          a problem? yes obv its a big problem using %s to get a string from the
          user, which leads to the possibility that the string may be longer
          than your buffer, causing overflow.
        </p>{" "}
        <br />
        <p>
          this was a one example. that was not just that. i remember once a
          lecture told us that “security isnt important” i know its hard to
          believe but one lecture actually did told us this,
        </p>
        <br />
        <p>
          this is not just that. i have remember how they touch us connecting an
          application with a database. and what they teach us was to string
          concat user input and you know where that goes. small credit to one
          lecture we had he actually told us to use param queries but that was
          the only one. i use to go to all the lectures we had and i know
          exactly what they tough us. ( and yes im a nerd ){" "}
        </p>
        <br />
        <hr />
        <br />
        <p>
          i wont go too much about how i got in to there internal infra remotely
          i just blame the people who build this. if you are wondering how easy
          its to find the usernames of the main website nsbm.ac.lk its just a
          default route. which they didn't even blocked. see your self [3]
        </p>
        <p>
          its funny. this was using word-press even-tho i have usernames which i
          can brute force ( they do not have a protection ){" "}
        </p>
        <br />
        <p>
          this wasnt enough for me. so i went to student portal which was so
          much vulnerable you remove your session then you can get another users
          details. lmao.{" "}
        </p>
        <br />{" "}
        <p>
          the database you got here [4] is the live1 which seems like the
          database for there ums ( university management system ) which was
          super easy to hack in to ( sorry im not going lot in to details here )
          also if you do a small digging you can find lot more. even the
          phpmyadmin is exposed to the internet ( not you now how easy for me to
          get the db dump myself ) [4] getting in to the network was really
          easy. i had write privileges :)
        </p>
        <br />
        <p>
          [3] https://nsbm.ac.lk/wp-json/wp/v2/users <br />
          [4] https://students.nsbm.ac.lk/phpmyadmin
        </p>
        <br /> <hr /> <br />
        <p>
          and you might be wondering what type of recovery thing they have in
          case of security incident. and let me tell you my friend none
          surprised right ? and hear me out some of your passwords are stored
          without even hashing... and yes you can find some on the files i
          leaked.
        </p>
        <br />
        <p>
          this is all i have to talk about i hope you will take a better
          desesion. if there’s anything email me at
          <a href="mailto:ripnsbm@protonmail.com">
            ripnsbm[at]protonmail[dot]com{" "}
          </a>
        </p>
        <br />
        <br />
        <Message negative>
          <Message.Header>Removing this information </Message.Header>
          <p>
            sorry for causing trouble if you want this to removed email me at{" "}
            <a href="mailto:ripnsbm@protonmail.com">
              ripnsbm[at]protonmail[dot]com{" "}
            </a>{" "}
            i will remove the information{" "}
          </p>
        </Message>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export default Blog;
