# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  name            :string
#  password_digest :string           not null
#  session_token   :string           not null
#  is_host         :boolean          not null
#  photo_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

User.destroy_all

u1 = User.create(username: "demo_user", name: "Demo User", password: "passwordpassword", photo_url: "https://res.cloudinary.com/whasting/image/upload/v1490151166/default-user-image_iwf9rw.png")
u2 = User.create(username: "wade", name: "Wade H", password: "password", is_host: true, photo_url: "https://res.cloudinary.com/whasting/image/upload/v1489776959/sailin_jkgbvd.jpg")
u3 = User.create(username: "brittany", name: "Brittany K", password: "password", is_host: true, photo_url: "https://res.cloudinary.com/whasting/image/upload/v1490151166/default-user-image_iwf9rw.png")
u4 = User.create(username: "max", name: "Max M", password: "password", is_host: true, photo_url: "https://res.cloudinary.com/whasting/image/upload/c_crop,h_450,w_450,x_100,y_175/v1490390173/max_lvnjij.jpg")
u5 = User.create(username: "tom", name: "Tom D", password: "password", is_host: true, photo_url: "https://res.cloudinary.com/whasting/image/upload/c_crop,h_150,w_150,x_0/v1490390173/tom_alrkaz.jpg")
u6 = User.create(username: "matt", name: "Matt M", password: "password", is_host: true, photo_url: "https://res.cloudinary.com/whasting/image/upload/v1490151166/default-user-image_iwf9rw.png")

#  id              :integer          not null, primary key
#  name            :string           not null
#  description     :text
#  address         :string
#  resort_logo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

Resort.destroy_all

r1 = Resort.create(
  name: 'Boreal',
  description: "The Place to Learn to Ski and Snowboard
Boreal Ski Resort is the closest and best valued resort to the Sacramento and Bay Areas. A secret powder paradise in the Lake Tahoe area, Boreal offers something for everyone.

First skiing or snowboarding trip to Tahoe? Just learning? Boreal Ski Resort is perfect for beginner snowboarders and skiers. There is a reason more than 400,000 adults and kids have learned to ski and snowboard at Boreal. Boreal's instructors are trained and qualified, and love what they do. The beginner hill at Boreal is gentle and easy to get to, just steps from the lodge and rental shop.",
  address: '19749 Boreal Ridge Rd, Soda Springs, CA 95728',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/boeralLogo_nnhk22.png')

r2 = Resort.create(
  name: 'Heavenly',
  description: "Heavenly is for those who are up for first chair and are still going strong well after last call. With 4,800 acres full of off-the-grid terrain and the most incredible views of Lake Tahoe, you can go big and forge your own path. It’s so big, you can ski two states in one day. With 34 miles of wide-open groomed cruisers, 1,600 foot plunges in the double-black-diamond canyons, and the most outrageous tree skiing in North America, the choices are endless. When the sun goes down, kick off your evening with Unbuckle at Tamarack Lodge, offering half-priced drinks, live DJs, dancing and the Heavenly Angels- all at 9,150 feet! Don’t miss The DJ Cat, Heavenly’s custom-built mobile DJ station on the back of a snow cat, which brings the party to the slopes with 52 high-output speakers and 1,200 watts of power. ",
  address: '4080 Lake Tahoe Blvd, South Lake Tahoe, CA 96150',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/heavenly-logo_m0rotq.png')

r3 = Resort.create(
  name: 'Homewood',
  description: "Homewood Mountain Resort boasts some of, if not the best views in California’s entire Lake Tahoe region. Easily accessible from Interstate 80 and California Highway 89, the resort rises 1,650 vertical feet from the shores of beautiful Lake Tahoe to its 7,880’ summit elevation. The resort averages 450 inches of snowfall and 300 days of sunshine each year. While there are beginner terrain options (15%) and advanced terrain (35%), skiers and snowboarders often come to enjoy an abundance of intermediate terrain (50% of the mountain) while taking in the views of crystal clear Lake Tahoe. Guests can also enjoy Homewood’s West Shore Café & Inn, with world class dining options in an intimate lakefront inn setting.",
  address: '5145 W Lake Blvd, Homewood, CA 96141',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/homewood-logo-300_ojemwp.png')

r4 = Resort.create(
  name: 'Kirkwood',
  description: "Kirkwood Mountain Resort is a year-round mountain destination located along the Sierra Crest in the Eldorado National Forest south of Lake Tahoe in California. The terrain at Kirkwood offers skiers and riders everything from long groomed trails to expert lines and chutes. The resort receives abundant snowfall each season coupled with spectacular views of the surrounding mountains.

The village contains ski in, ski out accommodations with adjacent shops and restaurants. The resort also plays host to other activities including cross country skiing, snow shoeing, dog sled tours and backcountry access.",
  address: '1501 Kirkwood Meadows Drive, Kirkwood, CA 95646',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/kirkwood_fpwg8p.png')

r5 = Resort.create(
  name: 'Mt. Rose',
  description: "Mount Rose is Lake Tahoe's closest serious skiing and riding to Reno and the Reno-Tahoe Airport. It's 25 minutes from Reno and 10 minutes from the North Shore, and daily ski shuttle service is available from many Reno properties.

Good powder skiing - and the Mt. Rose Chutes for serious skiers and riders - is thanks to Lake Tahoe's highest base area at 8,260 feet. This leads to 1,200 acres of skiing on 1,800 vertical feet.

Mt. Rose is an excellent choice for the first – or last – days of a Lake Tahoe vacation, or for those staying in Reno and enjoying nightlife in \“The Biggest Little City in the World\”",
  address: '22222 Mt Rose Hwy, Reno, NV 89511',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/mtRose_efoh9j.png')

r6 = Resort.create(
  name: 'North Star',
  description: "Northstar California, previously known as Northstar-at-Tahoe, is located near the north shore of Lake Tahoe and is home to over 3,000 acres of skiable terrain. The resort is known for its laid back atmosphere coupled with high-end luxury accommodations, shopping and dining.

The resort is home to impeccable grooming, incredible tree skiing and a variety of terrain options suitable for any ability level. The resort also contains world-class terrain parks and a 22-foot superpipe designed by Olympian Shaun White.",
  address: '5001 Northstar Dr, Truckee, CA 96161',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776231/northStar_b8gmjx.png')

r7 = Resort.create(
  name: 'Sierra-at-Tahoe',
  description: "Since its inception in 1946, Sierra-at-Tahoe Resort has grown into its role as one of Lake Tahoe's largest resort areas. Sierra-at-Tahoe features 14 chairlifts that access 2000 acres of skiable terrain and 2,212 feet of vertical. The resort also provides 5 backcountry access gates into Huckleberry Canyon. The resort includes 8 food outlets, 6 bars, ski & snowboard group and private lessons as well as a telemark and backcountry center. The South Shore of Lake Tahoe also provides plentiful lodging options for guests.

The 46 available trails average 400 inches of snow per year. Blizzard Mountain provides tubing hills and a snowplay area. In addition, visitors will find 3 miles of snowshoe trails.",
  address: '1111 Sierra at Tahoe Rd, Twin Bridges, CA 95735',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1489776232/sierra_qpamxk.png')

r8 = Resort.create(
  name: 'Squaw Valley Alpine Meadows',
  description: "Squaw Valley | Alpine Meadows is an internationally renowned ski resort in North Lake Tahoe, California that spans more than 6,000 skiable acres. The resort features 42 lifts and 270 trails, as well as the European-inspired Village at Squaw Valley featuring nearly 60 restaurants, bars, boutiques and art galleries.

Snowfall averages 450 inches, providing one of the longest ski and snowboard seasons in Lake Tahoe and establishing Squaw | Alpine as a top destination for spring skiing and boarding. Squaw | Alpine also boasts one of the region’s only mountain-top beginner areas and several intermediate skier havens, including Shirley Lake and the newly renamed Pacific Crest Bowls.",
  address: '1960 Squaw Valley Rd, Olympic Valley, CA 96146',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_65,w_225/v1489776232/squawValley_aqxuwc.png')

r9 = Resort.create(
  name: 'Sugar Bowl',
  description: "Perched atop Tahoe’s Donner Summit, Sugar Bowl Resort is the closest major resort to Sacramento and the Bay Area. Sugar Bowl offers terrain to accommodate beginners and challenge experts, spreading across four peaks serviced by 13 lifts and 1500 acres with 500 inches of annual snowfall. As one of the country's oldest ski areas, Sugar Bowl has kept it's classic ski atmosphere while providing modern amenities. Guests can access the resort through two portals--a quick ride on the historic gondola to the snow bound Village or slope side parking at the modern Mt. Judah Day Lodge.",
  address: '629 Sugar Bowl Rd, Norden, CA 95724',
  resort_logo_url: 'https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_225/v1490048324/sugarbowl_sz5bai.png')

  # Table name: events
  #
  #  id         :integer          not null, primary key
  #  title      :string           not null
  #  body       :text
  #  date       :datetime         not null
  #  resort_id  :integer          not null
  #  host_id    :integer          not null
  #  created_at :datetime         not null
  #  updated_at :datetime         not null

Event.destroy_all

e1 = Event.create(
  title: "Shredding at Boreal",
  body: "We're a bunch of pros just loving life.",
  date: "3/3/2018",
  capacity: 5,
  resort_id: r1.id,
  host_id: u2.id)

e2 = Event.create(
  title: "Noobs only!",
  body: "If you're not an absolute beginner, this event isn't for you",
  date: "1/2/2018",
  capacity: 7,
  resort_id: r1.id,
  host_id: u3.id)

e3 = Event.create(
  title: "Hitting dat Heavenly powder at Heavenly",
  body: "Fun for the whole family, come on down!",
  date: "20/4/2017",
  capacity: 4,
  resort_id: r2.id,
  host_id: u2.id)

e4 = Event.create(
  title: "Happy Fun Ski Time",
  body: "We're headed to Boreal on the 15th of February, come snowboard your valentine woes away!",
  date: "15/2/2018",
  capacity: 5,
  resort_id: r1.id,
  host_id: u2.id)

e5 = Event.create(
  title: "Boreal Gnar Gnar Pow Pow",
  body: "There's like, 50 ft of powder this year bruh! Can you say backflips?",
  date: "5/3/2018",
  capacity: 8,
  resort_id: r1.id,
  host_id: u4.id)

e6 = Event.create(
  title: "Beginning to intemediate Snowboarders",
  body: "Hi! We're from Sacramento and we want to desecrate the pristine powder that's forecasted to fall the day before our trip, come with us!",
  date: "1/4/2018",
  capacity: 3,
  resort_id: r1.id,
  host_id: u5.id)

Attendance.destroy_all

a1 = Attendance.create(user_id: u2.id, event_id: e1.id, waitlist: false)
