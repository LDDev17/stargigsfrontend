
import styles from './GigsPage1.module.css';

function GigsPage1() {
  return (
    <>
      <div className={styles.div}>
        <img
          loading="lazy"
          srcSet=""
          className={styles.img}
        />
        <div className={styles.navigation}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.div4} />
              <div className={styles.div5}>
                <div className={styles.div6}>
                  <img
                    loading="lazy"
                    src="hNotifications.png"
                    className={styles.img2}
                  />
                  <div className={styles.div7}>
                    <div className={styles.profil}>
                      <img
                        loading="lazy"
                        srcSet="profile4.png"
                        className={styles.img3}
                      />
                      <div className={styles.content}>
                        <div className={styles.content2}>Hello!</div>
                        <div className={styles.title}>Andrew Smith</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.iconChevron}>
                <img
                  loading="lazy"
                  src="https"
                  className={styles.img4}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.div9}>
            <div className={styles.column}>
              <div className={styles.sidebarPerformer}>
                <div className={styles.div10}>
                  <div className={styles.div11}>
                    <div className={styles.div12}>
                      <img
                        loading="lazy"
                        srcSet="DarkLogo.png"
                        className={styles.img5}
                      />
                    </div>
                    <div className={styles.div13}>
                      <div className={styles.divider} />
                    </div>
                  </div>
                  <div className={styles.div14}>
                    <div className={styles.div15}>
                      <div className={styles.chip}>
                        <div className={styles.performer}>Performer</div>
                      </div>
                    </div>
                    <div className={styles.navigation2}>
                      <div className={styles.title2}>Main</div>
                      <div className={styles.dashboardNavitem}>
                        <img
                          loading="lazy"
                          src="dashboardIcon.png"
                          className={styles.img6}
                        />
                        <div className={styles.label}>Dashboard</div>
                      </div>
                      <div className={styles.performancesNavitem}>
                        <div className={styles.talentcard} />
                        <div className={styles.label}>Performances</div>
                      </div>
                      <div className={styles.gigsNavitem}>
                        <img
                          loading="lazy"
                          src="Gigs.png"
                        />
                        <div className={styles.label}>Gigs</div>
                      </div>
                      <div className={styles.messagesNavitem}>
                        <img
                          loading="lazy"
                          src="messages.png"
                          className={styles.img8}
                        />
                        <div className={styles.label2}>Messages</div>
                        <div className={styles.badge}>2</div>
                      </div>
                      <div className={styles.calendarNavitem}>
                        <img
                          loading="lazy"
                          src="calendar.png"
                          className={styles.img9}
                        />
                        <div className={styles.label}>Calendar</div>
                      </div>
                      <div className={styles.paymentsNavitem}>
                        <img
                          loading="lazy"
                          src="payments.png"
                          className={styles.img10}
                        />
                        <div className={styles.label}>Payments</div>
                      </div>
                      <div className={styles.profileNavitem}>
                        <img
                          loading="lazy"
                          src="profileicon.png"
                          className={styles.img11}
                        />
                        <div className={styles.label}>Profile</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div16}>
                  <div className={styles.divider} />
                </div>
                <div className={styles.navigation3}>
                  <div className={styles.title3}>Settings</div>
                  <div className={styles.settingsNavitem}>
                    <img
                      loading="lazy"
                      src="settings.png"
                      className={styles.img12}
                    />
                    <div className={styles.label}>Settings</div>
                  </div>
                </div>
                <div className={styles.navigation4}>
                  <div className={styles.messagesNavitem2}>
                    <img
                      loading="lazy"
                      src="Help.png"
                      className={styles.img13}
                    />
                    <div className={styles.label}>Help</div>
                  </div>
                </div>
                <div className={styles.button}>
                  <img
                    loading="lazy"
                    src="previous.png"
                    className={styles.img14}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.div17}>
                <div className={styles.div18}>
                  <div className={styles.div19}>
                    <div className={styles.div20}>
                      <div className={styles.gigs}>GIGS</div>
                      <div className={styles.manageyourgigseffortlessly}>
                        – Manage your gigs effortlessly!{" "}
                      </div>
                    </div>
                    <div className={styles.tab}>
                      <div className={styles.gigsbookingrequests}>
                        GIGS BOOKING REQUESTS
                      </div>
                      <div className={styles.upcominggigs}>UPCOMING GIGS</div>
                      <div className={styles.gighistory}>GIG HISTORY</div>
                    </div>
                    <div className={styles.div21}>
                      <div className={styles.div22}>
                        <div className={styles.searchgigbynamelocationtype}>
                          Search gig by name, location, type
                        </div>
                        <img
                          loading="lazy"
                          src="search.png"
                          className={styles.img15}
                        />
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.filter}>Filter</div>
                        <img
                          loading="lazy"
                          src="Filter.png"
                          className={styles.img16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.thismonth}>This month</div>
                  <img
                    loading="lazy"
                    src="dropdown.png"
                    className={styles.img17}
                  />
                </div>
                <div className={styles.block}>
                  <div className={styles.text}>Gigs Booking Requests</div>
                </div>
                <div className={styles.table}>
                  <div className={styles.tableHeader}>
                    <div className={styles.div23}>
                      <div className={styles.eventName}>Event Name</div>
                    </div>
                    <div className={styles.div24}>
                      <div className={styles.div25}>
                        <div className={styles.eventManager}>Event Manager</div>
                      </div>
                      <div className={styles.div26}>
                        <div>Location</div>
                        <div className={styles.vuesaxoutlinesort} />
                      </div>
                    </div>
                    <div className={styles.div27}>
                      <div className={styles.div28}>
                        <div>Amount</div>
                        <div className={styles.vuesaxoutlinesort} />
                      </div>
                      <div className={styles.div29}>
                        <div>Date & Time</div>
                        <div className={styles.vuesaxoutlinesort} />
                      </div>
                    </div>
                    <div className={styles.div30}>
                      <div className={styles.div31}>
                        <div>Gig Type</div>
                        <div className={styles.vuesaxoutlinesort} />
                      </div>
                      <div className={styles.action}>Action</div>
                    </div>
                  </div>
                  <div className={styles.div32}>
                    <div className={styles.div33}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow}>
                          <div className={styles.div34}>
                            <div className={styles.sunsetMusicFestival}>
                              Sunset Music Festival
                            </div>
                            <div>Jenny Wilson</div>
                            <div className={styles.miamiBeachFl}>
                              Miami Beach, FL
                            </div>
                            <div className={styles.css1234}>$1,234</div>
                            <div className={styles.apr2025830Pm}>
                              22 Apr 2025, 8:30 pm
                            </div>
                            <div>SOLO</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img18}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div35}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow2}>
                          <div className={styles.div36}>
                            <div className={styles.sunsetMusicFestival2}>
                              Private Wedding Reception
                            </div>
                            <div>Devon Lane</div>
                          </div>
                          <div className={styles.div37}>
                            <div className={styles.miamiBeachFl2}>
                              The Grand Ballroom...
                            </div>
                            <div className={styles.css899}>$899</div>
                          </div>
                          <div className={styles.div38}>
                            <div className={styles.apr2025800Pm}>
                              23 Apr 2025, 8:00 pm
                            </div>
                            <div>BAND</div>
                          </div>
                          <img
                            loading="lazy"
                            src=" messages.png, accept.png, Clear.png"
                            className={styles.img19}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div39}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow3}>
                          <div className={styles.div40}>
                            <div className={styles.sunsetMusicFestival3}>
                              Corporate Gala Night
                            </div>
                            <div>William Jane</div>
                            <div>Chicago</div>
                          </div>
                          <div className={styles.div41}>
                            <div className={styles.css899}>$899</div>
                            <div className={styles.apr2025630Pm}>
                              24 Apr 2025, 6:30 pm
                            </div>
                            <div>SOLO</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div42}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow4}>
                          <div className={styles.div43}>
                            <div className={styles.sunsetMusicFestival4}>
                              Urban Art & Sound
                            </div>
                            <div>Jane Cooper</div>
                            <div>Chicago</div>
                          </div>
                          <div className={styles.div44}>
                            <div className={styles.css1999}>$1999</div>
                            <div className={styles.apr2025630Pm}>
                              25 Apr 2025, 6:30 pm
                            </div>
                            <div>SOLO</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img21}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div45}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow5}>
                          <div className={styles.div46}>
                            <div className={styles.sunsetMusicFestival5}>
                              Sunset Music Festival
                            </div>
                            <div>Sarah Mitchell </div>
                            <div>Chicago</div>
                          </div>
                          <div className={styles.css887}>$887</div>
                          <div className={styles.div47}>
                            <div className={styles.apr2025830Pm}>
                              27 Apr 2025, 8:30 pm
                            </div>
                            <div>SOLO</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img22}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div48}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow6}>
                          <div className={styles.div49}>
                            <div className={styles.sunsetMusicFestival6}>
                              Sunset Music Festival
                            </div>
                            <div>Amanda Li</div>
                            <div>Austin, Texas</div>
                          </div>
                          <div className={styles.div50}>
                            <div className={styles.css2899}>$2,899</div>
                            <div className={styles.apr2025530Pm}>
                              30 Apr 2025, 5:30 pm
                            </div>
                            <div>SOLO</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img23}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.div51}>
                      <div className={styles.tableRowContainer}>
                        <div className={styles.tableRow7}>
                          <div className={styles.div52}>
                            <div className={styles.sunsetMusicFestival}>
                              Sunset Music Festival
                            </div>
                            <div>Lisa Watson</div>
                            <div className={styles.miamiBeachFl}>
                              Miami Beach, FL
                            </div>
                            <div className={styles.css2899}>$2,899</div>
                            <div className={styles.may2025700Pm}>
                              04 May 2025, 7:00 pm
                            </div>
                            <div>BAND</div>
                          </div>
                          <img
                            loading="lazy"
                            src="messages.png, accept.png, Clear.png"
                            className={styles.img24}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.tableHeader2}>
                      <div className={styles.pagination}>
                        <div className={styles.frame}>
                          <div className={styles.paginationBase}>
                            <img
                              loading="lazy"
                              src="previous.png"
                              className={styles.img25}
                            />
                            <div className={styles.previous}>Previous</div>
                          </div>
                          <div className={styles.frame2}>
                            <div className={styles.paginationBase2}>1</div>
                            <div className={styles.paginationBase3}>2</div>
                            <div className={styles.paginationBase4}>...</div>
                            <div className={styles.paginationBase5}>4</div>
                          </div>
                          <div className={styles.paginationBase6}>
                            <div className={styles.next}>Next</div>
                            <img
                              loading="lazy"
                              src="Next.png"
                              className={styles.img26}
                            />
                          </div>
                        </div>
                        <div className={styles.paginationBase7}>
                          Showing 7 of 25 results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default GigsPage1;